function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementsByName('img')
    var data = new Date()
    var hora = data.getHours()
    
    if(hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#c3cbcd'
        msg.innerHTML = `Agora são ${hora} horas. <br>Bom dia!`
    
    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b67468'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa tarde!`
    
    }else{
       img.src = 'fotonoite.png'
        document.body.style.background = '#191db8'
        msg.innerHTML = `Agora são ${hora} horas. <br>Boa noite!`
    }

}

