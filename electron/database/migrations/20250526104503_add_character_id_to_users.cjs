
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.integer('character_id').unsigned().notNullable().defaultTo(1)
         .references('id')
         .inTable('characters')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('character_id');
  });
};
