$(document).ready(function(){

    const mascaraTel = '(00) 00000-0000'
    
    $('#tel').mask(mascaraTel, {placeholder:mascaraTel})

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            tel:{
                required:true
            }
        },
        messages:{
            nome:'Insira o nome',
            email:'Insira o e-mail',
            tel:'Insira seu número de Celular'
        }
    })

    $('form').submit(function(e){
        e.preventDefault()
        const nome = document.querySelector('input[type=text]')
        const email = document.querySelector('input[type=email]')
        const tel = document.querySelector('input[type=tel]')
        if (nome.value=="" || email.value=="" || tel.value==""){
            $('.caixa-mensagem').addClass('mostrar')
            document.getElementById('mensagem').innerHTML = '<h4 style="color: red;"> Preencha o formulário </h4>' 

        }else if(!(nome.value=="" && email.value=="" && tel.value=="")){
            $('.caixa-mensagem').addClass('mostrar')
            document.getElementById('mensagem').innerHTML = '<h4 style="color: green;"> Formulário Enviado </h4>'
            nome.value=""
            email.value=""
            tel.value=""
        } 

    })
    

})