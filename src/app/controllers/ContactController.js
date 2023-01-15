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

  store() {
    // Criar novo registo
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
