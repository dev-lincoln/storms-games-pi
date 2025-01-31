"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      nome_usuario: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.CHAR(11),
        allowNull: true,
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      sexo: {
        type: Sequelize.STRING(9),
        allowNull: false,
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
