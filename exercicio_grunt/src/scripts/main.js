document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnClick').addEventListener('click', function(){
        document.getElementById('test-phrase').innerText =  "Isso era só um teste!" ;
        document.getElementById('test-phrase').style.display = 'block';
    })
 
})