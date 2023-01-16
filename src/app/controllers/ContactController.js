// eslint-disable-next-line no-unused-vars
const { response } = require('express');
const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // eslint-disable-next-line no-shadow
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  // eslint-disable-next-line consistent-return, no-shadow
  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Object not found' });
    }

    response.json(contact);
  }

  // eslint-disable-next-line no-shadow
  async store(request, response) {
    // Criar novo registo
    const {
      name, email, phone,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required!' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'Email is already exist!' });
    }

    const contact = await ContactRepository.create({
      name, email, phone,
    });

    response.json(contact);
  }

  update() {
    // Editar um registro
  }

  // eslint-disable-next-line no-shadow, consistent-return
  async delete(request, response) {
    // Deletar  um registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Object not found' });
    }

    await ContactRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
