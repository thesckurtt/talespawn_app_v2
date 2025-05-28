// knexfile.cjs
const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve('./data.db')
    },
    migrations: {
      directory: path.resolve('./migrations')
    },
    seeds: {
      directory: path.resolve('./seeds')
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA journal_mode = WAL;', done)
      }
    }
  }
};
