let empresa = {
    nome: 'Mercado Online',
    razaoSocial: 'ABCD LTDA',
    get pegarNome() {
        return this.nome
    }
}

console.log('Qual o nome da empresa: ' + empresa.pegarNome)