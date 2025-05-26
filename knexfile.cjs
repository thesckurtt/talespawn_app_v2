// knexfile.cjs
const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve('electron/database/data.db')
    },
    migrations: {
      directory: path.resolve('electron/database/migrations')
    },
    seeds: {
      directory: path.resolve('electron/database/seeds')
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA journal_mode = WAL;', done)
      }
    }
  }
};
