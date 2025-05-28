
exports.up = function (knex) {
  return knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', function (table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').unique().notNullable()
        table.boolean('new_user').notNullable().defaultTo(true)
        table.string('nickname').unique().notNullable()
        table.string('password').notNullable()

        // Como enum não é suportado nativamente no SQLite, você pode usar string ou integer:
        // table.enum('character_id', ['1', '2', '3']).notNullable().defaultTo('1');

      });
    }
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
