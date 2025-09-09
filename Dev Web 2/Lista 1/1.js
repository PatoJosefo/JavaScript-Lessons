//exercício 1

let nome = prompt("Informe o seu nome:");

let alturaCm = parseFloat(prompt("Informe sua altura em centímetros:"));

let peso = parseFloat(prompt("Informe seu peso em quilos:"));

let alturaM = alturaCm / 100;

let imc = peso / (alturaM * alturaM);

let classificacao = "";

if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

alert(`${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`);

//exercício 2

let idade = parseInt(prompt("Informe sua idade:"));
let faixaEtaria = "";

if (idade >= 0 && idade <= 15) {
    faixaEtaria = "Criança";
} else if (idade >= 16 && idade < 30) {
    faixaEtaria = "Jovem";
} else if (idade >= 30 && idade < 60) {
    faixaEtaria = "Adulto";
} else if (idade >= 60) {
    faixaEtaria = "Idoso";
} else {
    faixaEtaria = "Idade inválida";
}

let nota1 = parseFloat(prompt("Informe a nota da Atividade prática em laboratório:")); 
let nota2 = parseFloat(prompt("Informe a nota da Prova do semestre:")); 
let nota3 = parseFloat(prompt("Informe a nota do Trabalho teórico:")); 

let peso1 = 2, peso2 = 3, peso3 = 5;
let somaPesos = peso1 + peso2 + peso3;

let media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somaPesos;

let classificacao = "";

if (media >= 9 && media <= 10) {
    classificacao = "A";
} else if (media >= 8 && media < 9) {
    classificacao = "B";
} else if (media >= 7 && media < 8) {
    classificacao = "C";
} else if (media >= 6 && media < 7) {
    classificacao = "D";
} else if (media >= 5 && media < 6) {
    classificacao = "E";
} else {
    classificacao = "F";
}

alert(`Faixa etária: ${faixaEtaria}`);
alert(`A média do aluno é = ${media.toFixed(2)} e a sua classificação é ${classificacao}`);

//exercício 3

function calcularFrete() {

    let regiao = parseInt(prompt("Escolha a região (1: Sul, 2: Sudeste, 3: Centro-Oeste):"));
    let numPecas = parseInt(prompt("Informe o número de peças:"));
    let distancia = parseInt(prompt("Informe a distância em quilômetros:"));
    let rastreamento = prompt("Deseja rastreamento? (S para sim, N para não):").toUpperCase();

    let valorFretePorPeca;
    let desconto = 0;

    if (regiao === 1) { 
        valorFretePorPeca = 1.00;
        if (numPecas > 200) desconto = 0.10;
    } else if (regiao === 2) { 
        valorFretePorPeca = 1.20;
        if (numPecas > 200) desconto = 0.12; 
    } else if (regiao === 3) { 
        valorFretePorPeca = 1.30;
        if (numPecas > 200) desconto = 0.13; 
    } else {
        alert("Região inválida.");
        return;
    }

    let valorFretePecas = numPecas * valorFretePorPeca;
    let valorDesconto = valorFretePecas * desconto;
    valorFretePecas -= valorDesconto;

    let valorFreteKm = distancia * 0.50; 

    let taxaRastreamento = 0;
    if (rastreamento === "S") {
        taxaRastreamento = 500; 
    }

    let totalFrete = valorFretePecas + valorFreteKm + taxaRastreamento;

    alert(`Taxa de rastreamento: R$ ${taxaRastreamento.toFixed(2)}`);
    alert(`Valor do frete pelas peças: R$ ${valorFretePecas.toFixed(2)}`);
    alert(`Valor do frete por quilômetro: R$ ${valorFreteKm.toFixed(2)}`);
    alert(`Total do frete: R$ ${totalFrete.toFixed(2)}`);
}

calcularFrete();

//exercício 4

function calcularPagamento() {

    let codigoFuncionario = parseInt(prompt("Informe o código do funcionário:"));
    let horasTrabalhadas = parseInt(prompt("Informe o número de horas trabalhadas no mês:"));
    let turno = prompt("Informe o turno de trabalho (M para matutino, V para vespertino, N para noturno):").toUpperCase();
    let categoria = prompt("Informe a categoria (G para gerente, F para funcionário):").toUpperCase();

    let valorHora = 0;
    let salarioMinimo = 1300; 

    if (categoria === "G") {
        if (turno === "M" || turno === "V") {
            valorHora = salarioMinimo * 0.04 / 160; 
        } else if (turno === "N") {
            valorHora = salarioMinimo * 0.10 / 160; 
        }
    } else if (categoria === "F") {
        if (turno === "M" || turno === "V") {
            valorHora = salarioMinimo * 0.02 / 160; 
        } else if (turno === "N") {
            valorHora = salarioMinimo * 0.11 / 160; 
        }
    } else {
        alert("Categoria inválida!");
        return;
    }

    let salarioInicial = valorHora * horasTrabalhadas;

    let auxilioAlimentacao = 0;
    if (salarioInicial <= 1200) {
        auxilioAlimentacao = salarioInicial * 0.25; 
    } else if (salarioInicial > 1200 && salarioInicial <= 2000) {
        auxilioAlimentacao = salarioInicial * 0.20; 
    } else {
        auxilioAlimentacao = salarioInicial * 0.15;
    }

    let salarioFinal = salarioInicial + auxilioAlimentacao;

    alert(`Código do Funcionário: ${codigoFuncionario}`);
    alert(`Horas Trabalhadas: ${horasTrabalhadas}`);
    alert(`Turno de Trabalho: ${turno === "M" ? "Matutino" : turno === "V" ? "Vespertino" : "Noturno"}`);
    alert(`Categoria: ${categoria === "G" ? "Gerente" : "Funcionário"}`);
    alert(`Salário Inicial: R$ ${salarioInicial.toFixed(2)}`);
    alert(`Auxílio Alimentação: R$ ${auxilioAlimentacao.toFixed(2)}`);
    alert(`Salário Final: R$ ${salarioFinal.toFixed(2)}`);
}

calcularPagamento();

//exercício 5

function calculo(num1, num2, operacao) {
    let resultado;

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "subtração") {
        resultado = num1 - num2;
    } else {
        alert("Operação inválida!");
        return;
    }

    return resultado;
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite a operação (soma ou subtração):").toLowerCase();
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = calculo(numero1, numero2, operacao);
alert(`O resultado é: ${resultado}`);

//exercício 6

function dataPorExtenso(data) {

    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho", 
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    let partes = data.split("/");

    let dia = partes[0];
    let mes = meses[parseInt(partes[1]) - 1]; 
    let ano = partes[2];

    return `${dia} de ${mes} de ${ano}`;
}

let dataInput = prompt("Digite uma data no formato dd/mm/aaaa:");

alert(dataPorExtenso(dataInput));
