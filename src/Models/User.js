const Sequelize = require('sequelize')
const connection = require('../../config/database')

module.exports = connection.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
})