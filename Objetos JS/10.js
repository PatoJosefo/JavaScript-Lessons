function Empresa(nome, cnpj){
    this.nome = nome
    this.cnpj = cnpj
}

let obj1 = new Empresa('Shibata', '123456789')
let obj2 = new Empresa('Google', '987654321')

console.log(`Nome: ${obj1.nome} cnpj: ${obj1.cnpj}`)
console.log(`Nome: ${obj2.nome} cnpj: ${obj2.cnpj}`)