exports.up = (knex, Promise) => {
  return knex.schema.createTable('digimons', (table) => {
    table.uuid('id')
    table.string('name', 60)
    table.integer('level').defaultTo(1)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('digimons')
}
