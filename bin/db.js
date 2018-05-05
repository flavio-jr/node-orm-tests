require('dotenv').config()

/**
 * Sync the models to the database
 * Take the models definitions from src/Models
 */
require('../src/Models')
  .then(models => {
    models.forEach(model => {
      model.sync()
    })

    console.log('Models synchronized with the database')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })