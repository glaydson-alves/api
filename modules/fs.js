const { error } = require('console')
const fs = require('fs')
const path = require('path')

//criar uma pasta usando o metodo mkdir do module fs
fs.mkdir(path.join(__dirname, '/test'), (error) =>{
    if (error) {
        return console.log('erro:', error)
    }

    console.log('pasta criada com sucesso!')
})


// criar arquivo dentro de uma pasta
fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Olá node', (error) =>{
    if(error){
        return console.log('erro:', error)
    }

    console.log('arquivo criado com sucesso!')
})

// adicionar mais conteúdo ao arquivo criado
fs.appendFile(path.join(__dirname, '/test', 'test.txt'),' Olá Alves', (error) =>{
    if (error) {
        return console.log('erro:', error)
    }

    console.log('arquivo modificado com sucesso!')
})

// ler arquivos
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) =>{
    if (error) {
        return console.log('erro: ', error)
    }
    console.log(data)
})