$(document).ready(function () {
    $('.try').on('mouseenter',() =>{
        $('.paw').fadeIn();
        $('.try').css('opacity', '40%',);
    });
    $('.try').on('mouseleave',() =>{
        $('.paw').fadeOut();
        $('.try').css('opacity', '100%');
    });
});