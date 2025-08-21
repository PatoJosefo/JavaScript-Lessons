let freferencia = (obj) => {
    obj.valor = obj.valor + 100
    return obj
}

let obj = {valor: 50}

console.log(`valor: ${ freferencia(obj).valor}`)
console.log(`valor: ${obj.valor}`)