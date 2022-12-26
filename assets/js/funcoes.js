var botao = document.querySelector('#luz')
var lampada = document.querySelector('#lampada')
botao.onclick = function(){
    if(botao.value == 'Acender'){
        lampada.src = 'assets/img/lampadaligada.png'
        botao.value = 'Apagar'
        botao.innerHTML = 'Apagar lâmpada'
    }else{
        lampada.src = 'assets/img/lampadadesligada.png'
        botao.value = 'Acender'
        botao.innerHTML = 'Ligar lâmpada'
    }
}

var btn = document.querySelector('#abrir')
var portao = document.querySelector('#portao')
btn.onclick = function(){
    if(btn.value == 'Abrir'){
        portao.src = 'assets/img/portaoaberto.png'
        btn.value = 'Fechar'
        btn.innerHTML = 'Fechar portão'
    }else{
        portao.src = 'assets/img/portaofechado.png'
        btn.value = 'Abrir'
        btn.innerHTML = 'Abrir portão'
    }
}