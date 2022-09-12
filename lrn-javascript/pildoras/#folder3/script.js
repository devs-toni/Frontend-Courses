$(document).ready(function () {

    var foto = new Image()
    foto.src = 'pokeball.png'
    

    $('.img').hover(function(){
        $(this).attr('src', foto.src)
    }, function(){
        $(this).attr('src', 'imagen.webp')
    })
})