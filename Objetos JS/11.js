function Empresa(nome, razaoSocial) {
    this.nome = nome
    this.razaoSocial = razaoSocial,
        this.detalhe = function () {
            return this.nome + '\n' + this.razaoSocial
        }
}

let empresa = new Empresa('Mercado Online', 'ABC LTDA')

console.log("Detalhes da empresa: \n" + empresa.detalhe())