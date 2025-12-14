/*  Desafio Classificador de nível de Herói
*   o que deve ser utilizado
*   variáveis
*   operadores
*   laços de repetição
*   estruturas de decisões
*
*   objetivo
*   
*   crie uma variável para armazenar o nome e a quantidade
*   de experiência XP de um herói, depois utilize uma estrutura
*   de decisão para apresentar alguma das mensagens abaixo:
* 
*   se XP for menor que 1000 - Ferro
*   se XP for entre 1001 e 2000 - Bronze
*   se XP for entre 2001 e 5000 - Prata
*   se XP for entre 5001 e 7000 - Ouro
*   se XP for entre 7001 e 8000 - Platina
*   se XP for entre 8001 e 9000 - Ascendente
*   se XP for entre 9001 e 10000 - Imortal
*   se XP for maior ou igual a 10001 - Radiante
*   
*   ao final deve exibir a mensagem
*   o herói está no nível ...
*/


let heroiNome = 'Minato Namikaze'
let testeXP = [500, 1500, 3000, 6000, 7500, 8500, 9500, 12000]

for (let i = 0; i < testeXP.length; i++){
    let heroiXP = testeXP[i];


    if (heroiXP < 1000){
        console.log(`O herói ${heroiNome} está no nível Ferro`)
    } else if(1001 < heroiXP && heroiXP < 2000){
        console.log(`O herói ${heroiNome} está no nível Bronze`)
    } else if(2001 < heroiXP && heroiXP < 5000){
        console.log(`O herói ${heroiNome} está no nível Prata`)
    } else if(5001 < heroiXP && heroiXP < 7000){
        console.log(`O herói ${heroiNome} está no nível Ouro`)
    } else if(7001 < heroiXP && heroiXP < 8000){
        console.log(`O herói ${heroiNome} está no nível Platina`)
    } else if(8001 < heroiXP && heroiXP < 9000) {
        console.log(`O herói ${heroiNome} está no nível Ascendente`)
    } else if(9001 < heroiXP && heroiXP < 10000) {
        console.log(`O herói ${heroiNome} está no nível Imortal`)
    } else {
        console.log(`O herói ${heroiNome} está no nível Radiante`)
    }
}    
