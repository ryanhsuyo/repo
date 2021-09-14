var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// $(function(){

//     // hamburger icon 的切換
//     $("button.hamburger").on("click", function(){
//         $('button.hamburger').toggleClass("is-active");
//         $('div.main_nav20').toggleClass("is-active");
//         $('div.header_nav20').toggleClass("is-active");
//         $('div.nav20').toggleClass("is-active");
//     });

// });


// $(function(){

//     // 點擊按鈕，選單縮放
//     $("button.btn_switch").on("click", function(){
//         $("hamburger").slideToggle();
//     });
    
// });


  // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
        width: "100%",
        videoId: "SFaFpoCvYF8",
        playerVars: {
            playsinline: 1
        }
        });
    }

    document.querySelector(".img-wrap").addEventListener("click", (event) => {
        player.loadVideoById(event.target.dataset.videoId);
    });



