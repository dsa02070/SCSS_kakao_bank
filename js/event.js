$(function(){
    // table tab click event
    $('.tab_btn a').click(function(){
        $('.tab_btn a').removeClass('on');
        $(this).addClass('on');
    })

    // tab index 번호 별 테이블 addClass event
    $('.tab_btn a').each(function(){
        $(this).click(function(){
            let indexNum = $(this).index()
            $('.event_content').removeClass('on')
            $('.event_content:eq("'+indexNum+'")').addClass('on')
        })
    })
})

