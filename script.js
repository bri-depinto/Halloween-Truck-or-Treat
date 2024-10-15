$(document).ready(function () {

    $('.pawpic').on('mouseenter',() =>{
        $('.pawword').fadeIn();
        $('.pawpic').css('opacity', '75%',);
    });
    $('.pawpic').on('mouseleave',() =>{
        $('.pawword').fadeOut();
        $('.pawpic').css('opacity', '100%');
    });

    $('.candypic').on('mouseenter',() =>{
        $('.candyword').fadeIn();
        $('.candypic').css('opacity', '75%',);
    });
    $('.candypic').on('mouseleave',() =>{
        $('.candyword').fadeOut();
        $('.candypic').css('opacity', '100%');
    });
});
