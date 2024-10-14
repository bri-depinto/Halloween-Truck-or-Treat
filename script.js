$(document).ready(function () {
    $('.pawpic').on('mouseenter',() =>{
        $('.pawword').fadeIn();
        $('.pawpic').css('opacity', '75%',);
    });
    $('.pawpic').on('mouseleave',() =>{
        $('.pawword').fadeOut();
        $('.pawpic').css('opacity', '100%');
    });
});