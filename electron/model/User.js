import db from "../database/db.js";
import Joi from "joi";
import { Validate } from "./Validate.js";
import bcrypt from "bcryptjs";

/**
 * Classe User responsável por gerenciar operações relacionadas aos usuários,
 * incluindo listagem, criação e busca por email.
 */
export class User {
  /**
   * Retorna todos os usuários cadastrados no banco de dados.
   * @returns {Promise<Array>} Lista de usuários.
   * @throws {Error} Caso ocorra algum problema na consulta.
   */
  static async getAllUsers() {
    try {
      return await db('users').select('*')
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }

  /**
 * Cria um novo usuário após validar os dados e criptografar a senha.
 * @param {string} name Nome do usuário.
 * @param {string} email Email do usuário.
 * @param {string} nickname Apelido do usuário.
 * @param {string} password Senha em texto puro.
 * @returns {Promise<Object>} Objeto indicando sucesso ou falha da operação.
 * @returns {boolean} retorno.error Indica se houve erro.
 * @returns {number} [retorno.user] ID do usuário criado (se sucesso).
 */
  static async addUser({ name, email, nickname, password, character_id }) {
    const { valid, message } = Validate.validateUser({ name, email, nickname, password, character_id })

    if (!valid){ 
      // console.log(valid, message)
      return { error: true, message: message }
    }

    try {
      const [id] = await db('users').insert({ name, email, nickname, password: await bcrypt.hash(password, 10), character_id })
      return { error: false, user_id: id }
    } catch (error) {
      return { error: true, message: error }
    }
  }

  /**
   * Busca um usuário pelo email.
   * @param {string} email Email do usuário a ser buscado.
   * @returns {Promise<Object|null>} Retorna o usuário encontrado ou null.
   * @throws {Error} Caso ocorra algum problema na consulta.
   */
  static async getUserByEmail(email) {
    try {
      return await db('users').where('email', email).first()
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}

// User.getAllUsers().then(t => console.log(t))
// const user = {
//   name: "rgrdewe",
//   email: "gegee@gmai4wl.com",
//   nickname: "egeedgeg",
//   password: "eqweqweq"
// }
// User.addUser(user).then(response => console.log(response))