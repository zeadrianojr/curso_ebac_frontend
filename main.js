$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault()
        const item = $('form input').val()
        //console.log(item)
        const novoItem = `
        <li>${item} </li>
        `
        $(novoItem).appendTo('.lista')
        $('form input').val('')
    })

    $('.lista').on('click', 'li', function(){
        //permite que o evento de clique seja atribuído a todos os elementos <li> da lista, mesmo aqueles que são criados dinamicamente após a página ser carregada.
        $(this).addClass('riscado') //classe que tem a propriedade de traço em cima da palavra
    })

})
