const User = require('../Models/User')

const UserCrud = {
  
  /**
   * Creates new user
   * @param {string} username
   * @param {string} password
   */
  create (username, password) {
    const user = User.create({
      username: username,
      password: password
    })

    return user
  },

  /**
   * 
   * @param {number} id The user id
   * @param {Object} data The data to update
   * @param {string} data.username The new user username
   * @param {string} data.password The user new password
   */
  update (id, data) {
    const user = User
      .findById(id)
      .then(user => {
        user.username = data.username
        user.password = data.password

        return user.save()
      })

    return user
  },

  /**
   * Destroy an user
   * @param {number} id The user id
   */
  destroy (id) {
    return User
      .findById(id)
      .then(user => user.destroy())
  }
}

module.exports = UserCrud