const http = require('http')

const port = 3000

const server = http.createServer((req, res) =>{
    if ( req.url === '/home') {
        //O status code 200 é uma resposta padrão bem-sucedida em HTTP (Hypertext Transfer Protocol). 
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1> Home Page</h1>')
        // res.writeHead(200, {'Content-Type': 'text/html'}); é usado para configurar o cabeçalho da resposta. Isso indica que a resposta terá um status 200 (OK) e o tipo de conteúdo será texto simples ('text/html'). Em seguida, res.end('Home Page'); é usado para enviar o corpo da resposta.
    }

    if ( req.url === '/users') {
        const users = [
            {
                name: 'glaydson alves',
                email: 'email@hotmail.com'
            },
            {
                name: 'fulano alves',
                email: 'fulano@email.com'
            },
            {
                name: 'abacate com cebola',
                email: 'acc@email.com'
            }
        ]
        //'text/json' trocando o text para 'aplication no google chorme abrirá uma janela de download do arquivo.'
        res.writeHead( 200, {'Content-Type': 'text/json'})
        res.end(JSON.stringify(users))
    }
})

server.listen(port, () =>{
    console.log(`Rodando na porta ${port}!`)
})