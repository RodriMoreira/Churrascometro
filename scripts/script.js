let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("result");

function calc(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = carne(duracao) * adultos + (carne(duracao) * criancas /2);
    let totalCerveja = cerveja(duracao) * adultos;
    let totalBebida = bebida(duracao) * adultos + (bebida(duracao) * criancas /2);
    
    result.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p>`
    result.innerHTML += `<p>${Math.ceil (totalCerveja / 350)} Latas de Cerveja (350ml)</p>`
    result.innerHTML += `<p>${Math.ceil (totalBebida / 2000)} Garrafas de Refri (2L) </p>`
}

function carne(duracao){
   if (duracao >= 6){
       return 650;
   } else {
       return 400;
   }
}

function cerveja(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
 }

 function bebida(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
 }