$(function(){

    // gnb, submenu hover event
    $('.main_menu').mouseenter(function(){
        $('.submenu_wrap').addClass('on');
    })
    $('header').mouseleave(function(){
        $('.submenu_wrap').removeClass('on')
    })

})