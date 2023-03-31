/*
Crie uma validação no JavaScript, onde o formulário
será válido caso o número B seja maior que o número A

Exiba uma mensagem positiva quando o formulário for
válido e uma mensagem negativa quando for inválido.*/

function VerificaNum(numA, numB){
    return numB > numA ? true:false
}

let numVerificado = false
const form = document.getElementById('formula')


form.addEventListener('submit', function(e){
    e.preventDefault()

    //recupero os inputs
    const numeroA = document.getElementById('campoA')
    const numeroB = document.getElementById('campoB')

    //mensagens
    const fraseValida = `B>A - formulario válido`
    const fraseInvalida = `A>B - formulario inválido`

    // paragrafos
    const mensagemValida = document.querySelector('.valido')
    const mensagemInvalida = document.querySelector('.invalido')

    //atribuo minhas frases aos paragrafos
    mensagemValida.innerHTML = fraseValida
    mensagemInvalida.innerHTML = fraseInvalida

    //verifico se o numero B e maior que A
    numVerificado = VerificaNum(numeroA.value, numeroB.value)

    if (numVerificado){
        //se maior o formulario é valido
        mensagemValida.style.display = 'block'
        mensagemInvalida.style.display = 'none'

        numeroA.value = ''
        numeroB.value = ''
        
        
    }else{

        //formulario nao valido
        mensagemValida.style.display = 'none'
        mensagemInvalida.style.display = 'block'

        numeroA.value = ''
        numeroB.value = ''

        
    }

})
