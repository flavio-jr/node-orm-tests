require('dotenv').config()

const userCrud = require('./src/Cruds/UserCrud')

userCrud.create('rocket', '123')
  .then(user => {
    console.log(`${user.username} created`)

    userCrud.update(user.id, {
      username: 'lebre',
      password: '123'
    })
    .then(userUpdated => {
      console.log(`user ${user.username} becomes ${userUpdated.username}`)

      userCrud.destroy(userUpdated.id)
        .then(() => {
          console.log(`User ${userUpdated.username} destroyed`)
          process.exit(0)
        })
        .catch(err => {
          console.error(err)
          process.exit(1)
        })
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })