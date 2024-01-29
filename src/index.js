// const { Person } = require("../person")
// require('../modules/http')
// require('../modules/path')
// require('../modules/fs')
const dotenv = require('dotenv')
const connectToDatabase = require('../src/database/connect')

dotenv.config()

connectToDatabase()

require('../modules/express')


// const person = new Person ('Glaydson')
// console.log(person.sayMayName())

