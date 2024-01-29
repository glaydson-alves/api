const mongoose = require('mongoose')

// o userScrema vai receber um objeto com todos os campos necessários para poder criar no banco
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
})
// criar o model, é convencional que comece com letra maiscula.
const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
// UserModel será usado para fazer as operações em nosso banco de dados