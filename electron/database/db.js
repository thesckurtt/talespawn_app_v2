import knex from "knex";
import config from '../../knexfile.cjs'
// import path from "path"

const db = knex(config.development)

export default db