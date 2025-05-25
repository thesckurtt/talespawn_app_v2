// import db from "../database/db";
import bcrypt from "bcryptjs";
import { User } from "./User";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import Joi from "joi";
dotenv.config()

export class Auth {
  static login({ email, password }) {
    try {
      const user = User.getUserByEmail(email)
      const isValidHash = bcrypt.compare(password, user.password)
      if (isValidHash) {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        return { success: true, token: token }
      }
      return { error: true }
    } catch (error) {
      throw new Error("Erro: ", error)
    }
  }
  static register({ name, email, nickname, password }) {
    // const schema = Joi.object({
    //   name: Joi.string().min(3).required(),
    //   email: Joi.string().email().required(),
    //   nickname: Joi.string().min(3).required(),
    //   password: Joi.string().min(3).required()
    // })

    // const { error } = schema.validate({ name, email, nickname, password })

    // if (error) return { error: true }

    // try {
      
    // } catch (error) {
    //   throw new Error("Error: ", error)
    // }
  }
}