$(function () {

    // gnb, submenu hover event
    $('.main_menu').mouseenter(function () {
        $('.submenu_wrap').addClass('on');
        $('header').css('height', '300px');
    })
    $('header').mouseleave(function () {
        $('.submenu_wrap').removeClass('on');
        $('header').css('height', '60px');
    })

})