function aparecerTexto(){
    $('#texto').html('<p>Este texto va a aparecer</p>');
    $('#texto').slideToggle();
}

$(function(){
    $('#image').click(function(){
        $(this).animate(
            {
                marginLeft: '+=1500px',
                width: '+=300px',
                height: '+=300px',
            }, 3000
        )   
    });

    $('#image').mouseenter(function(){
        $(this).animate(
            {
                opacity: 1
            }
        )
    });

    $('#image').mouseout(function(){
        $(this).animate(
            {
                opacity: 0.2
            }
        )
    });
})

