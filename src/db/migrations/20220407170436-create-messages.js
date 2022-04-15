"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Messages", {
      messageId: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
      },
      messageText: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      sender: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Messages");
  },
};
