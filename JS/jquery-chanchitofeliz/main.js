$(function(){

    $('btn-animate').click(function(){
        $('h1').animate({width:'1000px'});


    });
    $('.enlace').click(function(){
        $('.penlace').toggleClass('red');
    });
    // removeClass() toggleClass()
        
   // $('p').css({'background-color': 'red'});
    $('#btn-hide').click(function(){
        $('.p').hide();
    });
    $('#btn-show').click(function(){
        $('.p').show();
    });

    $('#btn-double').dblclick(function(){
        $('h1').hide();
    });

    $('.primero').mouseenter(function(){
        $('#btn-mouse-enter').fadeOut();
    });

    $('.primero').mouseleave(function(){
        $('#btn-mouse-enter').fadeIn();
    }); 

    $('.p').mouseenter(function(){
        $('.primero').slideDown();
    });

    $('.p').mouseleave(function(){
        $('.primero').slideUp();
    });

   /* $('#strong').click(function(){
        alert($('#strong').html());
    });*/

    $('#strong').dblclick(function(){
        alert($('#strong').text());
        alert($('#strong').attr('title'));
    });

    $('.enlace').click(function(){
        $('.penlace').after('Hola <strong>Programadores</strong>');
        //append / prepend /after / before
        //remove() / empty()
    });
});