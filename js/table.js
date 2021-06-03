$(function(){
    // table tab click event
    $('.table_tab a').click(function(){
        $('.table_tab a').removeClass('on');
        $(this).addClass('on');
    })

    // tab index 번호 별 테이블 addClass event
    $('.table_tab a').each(function(){
        $(this).click(function(){
            let indexNum = $(this).index()
            $('.table_area').removeClass('on')
            $('.table_area:eq("'+indexNum+'")').addClass('on')
        })
        
    })

    // button click event
    $('.search a').click(function(e){
        e.preventDefault()
        $('.search input').toggleClass('on')
    })

    // pagination event
    $('.page_num ul li a').click(function(e){
        e.preventDefault()
        $('.page_num ul li a').removeClass('on')
        $(this).addClass('on')
    })

})