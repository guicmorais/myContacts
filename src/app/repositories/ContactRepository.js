// eslint-disable-next-line import/no-extraneous-dependencies
const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'guicm@mail.com',
    phone: '123456789',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
