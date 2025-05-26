
exports.up = function (knex) {
  knex.schema.hasTable('characters').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('characters', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
      })
    }
  })
};

exports.down = function (knex) {
return knex.schema.dropTableIfExists('characters');
};
