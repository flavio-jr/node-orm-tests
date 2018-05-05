const Sequelize = require('sequelize')

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    logging: false,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    storage: '',
    teste: '',
    ...process.env.DB_TYPE === 'sqlite' ? {storage: process.env.DB_PATH} : {}
  }
)