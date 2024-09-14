/******************Add the story ******************/
const image_profile = [
    ['./img_carousel/1.jpg','Happy'],
    ['./img_carousel/2.jpg','Birthday'],
    ['./img_carousel/3.jpg','To'],
    ['./img_carousel/4.jpg','you'],
    ['./img_carousel/5.jpg','Ankita'],
    ['./img_carousel/6.jpg',''],
    ['./img_carousel/7.jpg',''],
    ['./img_carousel/8.jpg',''],
    ['./img_carousel/9.jpg',''],
    ['./img_carousel/10.jpg',''],
    ['./img_carousel/11.jpg',''],
    ['./img_carousel/12.jpg',''],
    ['./img_carousel/13.jpg',''],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})