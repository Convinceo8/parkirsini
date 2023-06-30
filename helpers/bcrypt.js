const bcrypt = require("bcryptjs")

const hashPassword = (pass) => bcrypt.hashSync(pass, 8)
const compareHash = (pass, hashed) => bcrypt.compareSync(pass, hashed)

module.exports = { hashPassword, compareHash }