import db from "../database/db.js";
export class User {
  static async getAllUsers() {
    try {
      return await db('users').select('*')
    } catch (error) {
      throw new Error("Error: ", error)
    }
  }
}

// User.getAllUsers().then(t => console.log(t))