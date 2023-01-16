// eslint-disable-next-line import/no-extraneous-dependencies
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guicm@mail.com',
    phone: '123456789',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mucio',
    email: 'mucio@mail.com',
    phone: '12345672389',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }

  create({ name, email, phone }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id: v4(),
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactRepository();
