let radio = window.document.getElementsByName('myradio')

let peso = document.querySelector('.peso')

let altura = document.querySelector('.altura')

let resultado = document.querySelector('.resultado')

let faixaimc = document.querySelector('.faixa-imc')

function calcular() {
    let imc = peso.value/(altura.value/100)**2
    if (radio[0].checked) {
        if (imc.toFixed(1) <= 16) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Magreza grave<h2>`
        } if (imc.toFixed(1) >16 && imc.toFixed(1) <=17) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Magreza moderada<h2>`
        } if (imc.toFixed(1) >17 && imc.toFixed(1) <=18.5) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Magreza leve<h2>`
        } if (imc.toFixed(1) >18.5 && imc.toFixed(1) <=25) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Saudável<h2>`
        } if (imc.toFixed(1) >25 && imc.toFixed(1) <=30) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Sobrepeso<h2>`
        } if (imc.toFixed(1) >30 && imc.toFixed(1) <=35) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Obesidade Grau I<h2>`
        } if (imc.toFixed(1) >35 && imc.toFixed(1) <=40) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Obesidade Grau II<h2>`
        } if (imc.toFixed(1) >40) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Obesidade Grau III<h2>`
        } 
    } else if (radio[1].checked) {
        if (imc.toFixed(1) <= 16) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Magreza grave<h2>`
        } if (imc.toFixed(1) >16 && imc.toFixed(1) <=17) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Magreza moderada<h2>`
        } if (imc.toFixed(1) >17 && imc.toFixed(1) <=18.5) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Magreza leve<h2>`
        } if (imc.toFixed(1) >18.5 && imc.toFixed(1) <=24) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Saudável<h2>`
        } if (imc.toFixed(1) >24 && imc.toFixed(1) <=30) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Sobrepeso<h2>`
        } if (imc.toFixed(1) >30 && imc.toFixed(1) <=35) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Obesidade Grau I<h2>`
        } if (imc.toFixed(1) >35 && imc.toFixed(1) <=40) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Obesidade Grau II<h2>`
        } if (imc.toFixed(1) >40) {
            resultado.innerHTML = `<h1>Seu IMC é de = ${imc.toFixed(1)}</h1><br>`
            faixaimc.innerHTML = `<h2>Você está em: Obesidade Grau III<h2>`
        } 
        mulher.innerHTML = `De 18.5 a 24`
        mulher2.innerHTML = `De 24 a 30`

    } else {
        alert('[ERRO] Por favor escolha um Sexo, Masculino ou Feminino!!')
    }

    if (peso.value == '' || altura.value == '') {
        alert('[ERRO] Por favor preencha todos os campos!!')
    }
}
