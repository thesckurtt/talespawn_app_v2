import Joi from "joi";

export class Validate {
  static validateUserRegistrer({ name, email, nickname, password }) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      nickname: Joi.string().min(3).required(),
      password: Joi.string().min(3).required()
    })
    const { error } = schema.validate({ name, email, nickname, password })
    // console.log(error)
    if (error) return { valid: false, message: error.details[0].message}
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