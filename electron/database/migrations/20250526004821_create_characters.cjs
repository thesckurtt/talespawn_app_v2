
exports.up = function (knex) {
  return knex.schema.hasTable('characters').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('characters', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('image').notNullable()
        table.string('bg_video').notNullable()
        table.string('main_audio').notNullable()
        table.string('description').notNullable()

        // Attributes
        table.integer('magic').notNullable().defaultTo(0)
        table.integer('attack').notNullable().defaultTo(0)
        table.integer('healing').notNullable().defaultTo(0)
        table.integer('perception').notNullable().defaultTo(0)
      })
    }
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('characters');
};