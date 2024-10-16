$(document).ready(function () {

    $('.pawpic').on('mouseenter',() =>{
        $('.pawword').fadeIn();
        $('.pawpic').css('opacity', '75%',);
    });
    $('.pawpic').on('mouseleave',() =>{
        $('.pawword').fadeOut();
        $('.pawpic').css('opacity', '100%');
    });
// end of first pic

    $('.candypic').on('mouseenter',() =>{
        $('.candyword').fadeIn();
        $('.candypic').css('opacity', '75%',);
    });
    $('.candypic').on('mouseleave',() =>{
        $('.candyword').fadeOut();
        $('.candypic').css('opacity', '100%');
    });
// end of second pic

$('.mariopic').on('mouseenter',() =>{
    $('.marioword').fadeIn();
    $('.mariopic').css('opacity', '75%',);
});
$('.mariopic').on('mouseleave',() =>{
    $('.marioword').fadeOut();
    $('.mariopic').css('opacity', '100%');
});
// end of third pic


$('.alicepic').on('mouseenter',() =>{
    $('.aliceword').fadeIn();
    $('.alicepic').css('opacity', '75%',);
});
$('.alicepic').on('mouseleave',() =>{
    $('.aliceword').fadeOut();
    $('.alicepic').css('opacity', '100%');
});
// end of fourth pic

$('.hawaiipic').on('mouseenter',() =>{
    $('.hawaiiword').fadeIn();
    $('.hawaiipic').css('opacity', '75%',);
});
$('.hawaiipic').on('mouseleave',() =>{
    $('.hawaiiword').fadeOut();
    $('.hawaiipic').css('opacity', '100%');
});
// end of fifth pic


$('.carnivalpic').on('mouseenter',() =>{
    $('.carnivalword').fadeIn();
    $('.carnivalpic').css('opacity', '75%',);
});
$('.carnivalpic').on('mouseleave',() =>{
    $('.carnivalword').fadeOut();
    $('.carnivalpic').css('opacity', '100%');
});
// end of sixth pic


$('.graveonepic').on('click',() =>{
    $('.graveonepic').hide();
    $('.graveoneinfo').fadeIn();
    $('.graveonetitle').fadeIn();
    $('.gravedivone').css('background-color', 'blueviolet',);
});

$('.graveoneinfo').on('click',() =>{
    $('.graveonepic').fadeIn();
    $('.graveoneinfo').hide();
    $('.graveonetitle').hide();
    $('.gravedivone').css('background-color', 'black');
});
$('.graveonetitle').on('click',() =>{
    $('.graveonepic').fadeIn();
    $('.graveoneinfo').hide();
    $('.graveonetitle').hide();
    $('.gravedivone').css('background-color', 'black');
});


$('.gravetwopic').on('click',() =>{
    $('.gravetwopic').hide();
    $('.gravetwoinfo').fadeIn();
    $('.gravetwotitle').fadeIn();
    $('.gravedivtwo').css('background-color', 'blueviolet');
});

$('.gravetwoinfo').on('click',() =>{
    $('.gravetwopic').fadeIn();
    $('.gravetwoinfo').hide();
    $('.gravetwotitle').hide();
    $('.gravedivtwo').css('background-color', 'black');
});
$('.gravetwotitle').on('click',() =>{
    $('.gravetwopic').fadeIn();
    $('.gravetwoinfo').hide();
    $('.gravetwotitle').hide();
    $('.gravedivtwo').css('background-color', 'black');
});




$('.gravethreepic').on('click',() =>{
    $('.gravethreepic').hide();
    $('.gravethreeinfo').fadeIn();
    $('.gravethreetitle').fadeIn();
    $('.gravedivthree').css('background-color', 'blueviolet');

});

$('.gravethreeinfo').on('click',() =>{
    $('.gravethreepic').fadeIn();
    $('.gravethreeinfo').hide();
    $('.gravethreetitle').hide();
    $('.gravedivthree').css('background-color', 'black');
});
$('.gravethreetitle').on('click',() =>{
    $('.gravethreepic').fadeIn();
    $('.gravethreeinfo').hide();
    $('.gravethreetitle').hide();
    $('.gravedivthree').css('background-color', 'black');
});



$('.setupdiv').on('click',() =>{
    $('setuptext').slideToggle();
});

});
