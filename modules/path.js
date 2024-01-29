const path = require('path')

// Basename
// apenas o nome do arquivo atual
console.log(path.basename(__filename))

//Nome do diretório atual
console.log(path.dirname(__filename))

//extensão do arquivo
console.log(path.extname(__filename)
)

//criar objeto path
console.log(path.parse(__filename))

// juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'))