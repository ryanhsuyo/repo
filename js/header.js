$(function(){

    // hamburger icon 的切換
    $("button.hamburger").on("click", function(){
        $('button.hamburger').toggleClass("is-active");
        $('div.main_nav20').toggleClass("is-active");
        $('div.header_nav20').toggleClass("is-active");
        $('div.nav20').toggleClass("is-active");
    });

});


$(function(){

    // 點擊按鈕，選單縮放
    $("button.btn_switch").on("click", function(){
        $("hamburger").slideToggle();
    });
    
});

