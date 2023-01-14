const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registo
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar  um registro
  }
}

module.exports = new ContactController();
