class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
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
