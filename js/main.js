$(document).ready(function(){
    // selecionar apenas 1 radio input
    $('input[type=radio]').change(function() {
        $('input[type=radio]:checked').not(this).prop('checked', false);
    })
    const mascaraMovel = '(00) 00000-0000'
    const mascaraFixo = '(00) 0000-0000'
    const mascaraCPF = '000.000.000-00'
    const mascaraCEP = '00000-000'

    $('#movel').click(function(){
        $('#telefone').mask(mascaraMovel, {placeholder:mascaraMovel})
    })
    $('#fixo').click(function(){
        $('#telefone').mask(mascaraFixo, {placeholder:mascaraFixo})
    })
    $('#cpf').mask(mascaraCPF, {placeholder:mascaraCPF})

    $('#cep').mask(mascaraCEP, {placeholder:mascaraCEP})
    
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required:true
            },
            cpf:{
                required: true
            },
            end:{
                required:true
            },
            cep:{
                required: true
            }
        },
        messages:{
            //mensagens padrão, mas posso personalizar
        }
    })
    const mensag = 'Formulário enviado'
    $('form').submit(function(e){
        e.preventDefault()
        $('#mensagem').addClass('mostrar')
        document.getElementById('mensagem').innerHTML = "<h3>Formulário enviado!<h3>" 
    })
    
    $('#btn.reseta').click(function(){
        document.getElementById('mensagem').innerHTML = ""
    })    
  


})