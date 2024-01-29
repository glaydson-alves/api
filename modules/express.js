const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express()
app.use(express.json())
//endpoint
app.use((req, res, next) =>{
    console.log(`Request Type: ${req.method}`)
    console.log(`Content Type: ${req.headers['content-type']}`)
    console.log(`Date: ${new Date()}`)
    next()
})

// aqui estou fazendo uma requisição de busca de dados no banco de dados
app.get('/users', async (req, res) =>{
    try {
        const users = await UserModel.find({})

        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)        
    }
})

//nesta requisição eu estou buscando um dado no banco usando o id
app.get('/users/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
        return res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// aqui estou criando o usuario e enviando para o banco de dados
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

//para fazer a atualização dos dados podemos usar o PUT e o PATCH
// o PUT é usado para atualizar todas as informações de um objeto
// o PATCH é usando pra atualizar apenas parcialmente, como por exemplo apenas o email ou apenas o name.
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true})

        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.delete('/users/:id', async (req, res) =>{
    try{
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id, req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

const port = 3000
app.listen(port, () =>{ console.log(`servidor rodando na porta ${port}!`)})