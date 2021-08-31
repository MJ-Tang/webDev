var slides = document.querySelector('.sliderItems').children;
var nextSlide = document.querySelector('.rightSlider');
var prevSlide = document.querySelector('.leftSlider');
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
    console.log('click');
    next('next');
}

prevSlide.onclick = function () {
    console.log('click');
    next('prev');
}

function next(direction) {

    if(direction == 'next'){
        index++;
        if (index == totalSlides) {
            index = 0;
        } 
    }else{
        if(index==0){
            index = totalSlides - 1;
        }else{
            index--
        }
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }

    slides[index].classList.add('active');
}