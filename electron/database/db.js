import knex from "knex";
import path from "path"

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve('electron/database/data.db')
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA journal_mode = WAL;', done); // WAL = Write-Ahead Logging
    }
  }
})




db.schema.hasTable('users').then(exists => {
  if (!exists) {
    return db.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').unique().notNullable()
      table.string('nickname').unique().notNullable()
      table.string('password').notNullable()
      // table.enum('character_id', ['1', '2', '3']).notNullable().defaultTo('1');
    })
  }
})

export default db