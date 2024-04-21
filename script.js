const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// Function to initialize Swiper
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

// Call swiperAnimation function after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    swiperAnimation();
});

// Function for page4 animations
function page4Animation(){
    var a = document.querySelector("#elem1")
    var image = a.getAttribute("data-image");

    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

// Call page4Animation function after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    page4Animation();
});
