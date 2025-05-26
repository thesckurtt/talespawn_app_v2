import Joi from "joi";

/**
 * Classe Validate responsável por validar dados 
 * usando regras definidas com Joi.
 */
export class Validate {
  /**
   * Valida os dados do usuário para cadastro.
   * @param {string} name Nome do usuário.
   * @param {string} email Email do usuário.
   * @param {string} nickname Apelido do usuário.
   * @param {string} password Senha do usuário.
   * @returns {Object} Objeto contendo status da validação.
   * @returns {boolean} retorno.valid Indica se os dados são válidos.
   * @returns {string} [retorno.message] Mensagem de erro caso inválido.
   */
  static validateUser({ name, email, nickname, password,character_id }) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      nickname: Joi.string().min(3).required(),
      password: Joi.string().min(3).required(),
      character_id: Joi.string().min(1).required()
    })
    const { error } = schema.validate({ name, email, nickname, password, character_id })
    if (error) return { valid: false, message: error.details[0].message }
    return { valid: true }
  }

  /**
    * Valida os dados de login.
    * @param {string} email Email do usuário.
    * @param {string} password Senha do usuário.
    * @returns {Object} Objeto contendo status da validação.
    * @returns {boolean} retorno.valid Indica se os dados são válidos.
    * @returns {string} [retorno.message] Mensagem de erro caso inválido.
    */
  static validateLogin({ email, password }) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(3).required()
    })
    const { error } = schema.validate({ email, password })
    if (error) return { valid: false, message: error.details[0].message }
    return { valid: true }
  }
}

// const user = {
//   name: "eee",
//   email: "teste@gmail.com",
//   nickname: "eqweq",
//   password: "eqweqweq"
// }

// console.log(Validate.validateUserRegistrer(user))