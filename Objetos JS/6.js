let freferencia = (obj) => {
    obj.valor = obj.valor + 100
    return obj
}

let fprimitiva = (valor) => {
    valor = valor + 100
    return valor
}

let obj = {valor: 50}

console.log(`valor: ${ fprimitiva(obj.valor)}`)

console.log(`valor: ${obj.valor}`)

console.log(`valor: ${ freferencia(obj).valor}`)
