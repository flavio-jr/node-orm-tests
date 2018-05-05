const path = require('path')
const fs = require('fs')

module.exports = new Promise((resolve, reject) => {
  return fs.readdir(__dirname, (err, files) => {
    if (err) return reject(err)
  
    const models = files
      .filter(file => (new RegExp('([A-Za-z]*)[^index]\.js')).test(file))
      .map(file => require(`./${file}`))

    return resolve(models)
  })
})