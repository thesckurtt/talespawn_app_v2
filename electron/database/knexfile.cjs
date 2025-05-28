// knexfile.cjs
const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, './data.db')
    },
    migrations: {
      directory: path.resolve(__dirname, './migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, './seeds')
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA journal_mode = WAL;', done)
      }
    }
  }
};
