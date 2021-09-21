'use strict';
const { encode } = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        "email": "user1@mail.com",
        "password": encode("12345"),
        "phoneNumber": "081234567",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "email": "user2@mail.com",
        "password": encode("12345"),
        "phoneNumber": "081234567",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "email": "user3@mail.com",
        "password": encode("12345"),
        "phoneNumber": "081234567",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
