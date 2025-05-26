
exports.up = function (knex) {
  return knex.schema.hasTable('contexts').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('contexts', (table) => {
        table.increments('id').primary()
        table.string('excerpt_history').notNullable()
        table.string('option_chosen').notNullable()
        table.string('option_declined').notNullable()
        table.datetime('updated_at').defaultTo(knex.fn.now())
        table.datetime('created_at').defaultTo(knex.fn.now())
        table.integer('user_id').unsigned().notNullable().defaultTo(1)
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
    }
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('contexts');
};
