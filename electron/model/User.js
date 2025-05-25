import db from "../database/db.js";
import Joi from "joi";

export class User {
  static async getAllUsers() {
    try {
      return await db('users').select('*')
    } catch (error) {
      throw new Error("Error: ", error)
    }
  }
  static addUser({ name, email, nickname, password }) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      nickname: Joi.string().min(3).required(),
      password: Joi.string().min(3).required()
    })

    const { error } = schema.validate({ name, email, nickname, password })

    if (error) return { error: true }
    
    try {
      db('users').insert()
    } catch (error) {
      throw new Error("Error: ", error)
    }
  }


  static async getUserByEmail(email) {
    try {
      return await db('users').where('email', email).first()
    } catch (error) {
      throw new Error("Error: ", error)
    }
  }
}

// User.getAllUsers().then(t => console.log(t))