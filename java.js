var swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
 // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});






var swiper = new Swiper (".mySwiper-2", {
  /*  slidesPerView: 3,
    spaceBetween: 20, 
    */
    loop: true, 
  //  loopFillGroupWithBlanck: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   /* breakpoints: {
        0: {
            slidesPerView: 1 ,
        },
        520 : {
            slidesPerView: 2,
        },
        950 :{
            slidesPerView: 3,
        },
    },*/
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById("swiper" + id );
        thisSwiper.swiper.update();
    })

});
