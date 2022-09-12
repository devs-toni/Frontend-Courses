$(document).ready(function () {

    var foto = new Image()
    foto.src = 'image.webp'
    
    $('#titulo').hide()

    $('#foto img').width(60).height(40).click(function () {
        $(this).stop().animate({
            marginLeft: '150px',
            width: '300px',
            height: '250px'
        }, 1000, function () {
            $('#titulo').fadeIn(1000).delay(5000).fadeOut(1000)
            $('#foto img').delay(5000).animate({
                marginLeft: '0px',
                width: '60px',
                height: '60px'
            }, 1000)
        })
    })

    $('#foto img').hover(function(){
        $(this).stop().animate({
            left:'0'
        }, 500, 'easeInSine')
    }, function(){
        $(this).stop().animate({
            left:'-40px'
        }, 1500, "easeOutBounce")

    })
})