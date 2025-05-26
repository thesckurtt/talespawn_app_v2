
exports.up = function (knex) {
  return knex.schema.hasTable('prompts').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('prompts', (table) => {
        table.increments('id').primary()
        table.string('prompt').notNullable()
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
  return knex.schema.dropTableIfExists('prompts');
};
