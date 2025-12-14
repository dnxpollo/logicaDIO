// Calculadora de partidas ranqueadas

/*
 * Criar uma função que recebe como parametro, 
 * a quantidade de vitórias e derrotas de um jogador,
 * Depois disso retorne o resultado para uma variável,
 * o saldo de ranqueadas deve ser feito através do calculo
 * (vitórias - derrotas)
 * 
 * Se vitórias for menor ou igual do que 10 = Ferro 
 * Se vitórias for entre 11 e 20 = Bronze  
 * Se vitórias for entre 21 e 50 = Prata
 * Se vitórias for entre 51 e 80 = Ouro
 * Se vitórias for entre 81 e 90 = Diamante
 * Se vitórias for entre 91 e 100 = Lendário 
 * Se vitórias for maior ou igual a 101 = Imortal
 * 
 * Saída
 * "O Heroi tem de saldo de {saldoVitorias} está no nível{nivel}"
 * 
 */

function calculadoraRakend(vitorias, derrotas){
    let saldoRanked = vitorias - derrotas
    let nivel = ''

    if(saldoRanked <= 10){
        nivel = 'Ferro'
    }
    else if(saldoRanked >= 11 && saldoRanked <= 20){
        nivel = 'Bronze'
    }
    else if(saldoRanked >= 21 && saldoRanked <= 50){
        nivel = 'Prata'
    }
    else if(saldoRanked >= 51 && saldoRanked <= 80){
        nivel = 'Ouro'
    }
    else if(saldoRanked >= 81 && saldoRanked <= 90){
        nivel = 'Diamante'
    }
    else if(saldoRanked >= 91 && saldoRanked <= 100){
        nivel = 'Lendário'
    }
    else {
        nivel = 'Imortal'
    }

    let fraseSaida = `O héroi tem saldo de ${saldoRanked} e está no nível ${nivel}`
    return fraseSaida
}

console.log(calculadoraRakend(60, 55))
console.log(calculadoraRakend(20, 8))
console.log(calculadoraRakend(60, 28))
console.log(calculadoraRakend(70, 15))
console.log(calculadoraRakend(100, 15))
console.log(calculadoraRakend(100, 5))
console.log(calculadoraRakend(160, 5))