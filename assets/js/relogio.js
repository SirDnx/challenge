function diaSemana(){

    var relogio = document.querySelector('#hora')
    var data = new Date()
    var diaSemana = data.getDay()

    switch(diaSemana){
        case 0:
            relogio.innerText = 'Domingo'
            break
        case 1:
            relogio.innerText = 'Segunda-feira'
            break
        case 2:
            relogio.innerText = 'Terça-feira'
            break
        case 3:
            relogio.innerText = 'Quarta-feira'
            break
        case 4:
            relogio.innerText = 'Quinta-feira'
            break
        case 5:
            relogio.innerText = 'Sexta-feira'
            break
        default:
            relogio.innerHTML = 'Sábado'
    }
}

function carregar(){

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    if(hora < 10){
        hora = '0' + hora
    }

    if(minuto < 10){
        minuto = '0' + minuto
    }

    if(segundo < 10){
    segundo = '0' + segundo
    }

    document.querySelector('#hora').innerHTML = `${hora}:${minuto}:${segundo}` 
}

window.setInterval('carregar()', 1000)


