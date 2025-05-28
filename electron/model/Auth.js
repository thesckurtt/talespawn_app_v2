// import db from "../database/db";
import bcrypt from "bcryptjs";
import { User } from "./User.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import Joi from "joi";
import { Validate } from "./Validate.js";
dotenv.config()



export class Auth {
  /**
   * Realiza login de usuário verificando email e senha.
   * Retorna token JWT se sucesso.
   * @param {string} email
   * @param {string} password
   * @returns {Object} resultado do login
   */
  static async login({ email, password }) {
    try {
      const user = await User.getUserByEmail(email)
      const isValidHash = user ? await bcrypt.compare(password, user.password) : false

      if (isValidHash) {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        return { success: true, token: token, user: user }
      }

      return { error: true }

    } catch (error) {
      return { error: true, message: error }
    }
  }

  /**
   * Registra um novo usuário.
   * @param {string} name
   * @param {string} email
   * @param {string} nickname
   * @param {string} password
   * @returns {Object} resultado do cadastro
   */
  static async register({ name, email, nickname, password, character_id }) {
    try {
      const user = await User.addUser({ name, email, nickname, password, character_id })
      if(user.error){
        return { error: true, message: user.message}
      }
      console.log(user)
      return { error: false, user_id: user.user_id }
    } catch (error) {
      return { error: true, message: error }
    }

  }
}

// const user = {
//   name: "dasdas",
//   email: "testetet@gmail.com",
//   nickname: "tetetet",
//   password: "teste2"
// }

// Auth.register(user).then(res => console.log(res))
// Auth.login(user).then(res => console.log(res))