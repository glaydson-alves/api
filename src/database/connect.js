const mongoose = require('mongoose')

const connectToDatabase = async () => {
    // vou criar varivéis de ambiente para colocar os dados sensivéis do banco de dados como por ex a senha e usuario.
    try { await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@db.5dnlddz.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conexão ao banco de dados realizada com sucesso!')        
    }catch (error) {
        console.error('Ocorreu um erro ao se conectar com o banco de dados:', error);
    }
    // await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@db.5dnlddz.mongodb.net/?retryWrites=true&w=majority`, (error) => {
    //     if (error) {
    //         console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error)
    //     }

    //     console.log('Conexão ao banco de dados realizadas com sucesso!')
    // })
}

module.exports = connectToDatabase;

// 7fPXjrwuRICfrTIv

// rISGxITQr0SnZ6Zc