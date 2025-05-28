
const jwt = require('jsonwebtoken')
const path = require('path');
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function IPCMiddleware(handler) {
  return async (event, args) => {
    try {
      const token = args.token
      if (!token) {
        throw new Error('Token not found!')
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      args.jwt = decoded;

      return await handler(event, args);

    } catch (error) {
      args.error = { error: true, message: "Invalid token" }
      return await handler(event, args);
    }
  }
}

module.exports = IPCMiddleware