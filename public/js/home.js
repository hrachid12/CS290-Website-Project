// Assign needed elements to variables
let carousel = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');

// Set carousel to first image
let counter = 1;
const SIZE = carouselImages[0].clientWidth;
carousel.style.transform = 'translateX(' + (-SIZE * counter) + 'px)';

// Button listeners
nextButton.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return
    carousel.style.transition = "transform 0.7s ease-in-out"
    counter++
    carousel.style.transform = 'translateX(' + (-SIZE * counter) + 'px)';
})

prevButton.addEventListener('click', () => {
    if (counter <= 0) return
    carousel.style.transition = "transform 0.7s ease-in-out"
    counter--
    carousel.style.transform = 'translateX(' + (-SIZE * counter) + 'px)';
})

carousel.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carousel.style.transition = "none"
        counter = carouselImages.length - 2
        carousel.style.transform = 'translateX(' + (-SIZE * counter) + 'px)';
    }
    else if (carouselImages[counter].id === 'firstClone') {
        carousel.style.transition = "none"
        counter = carouselImages.length - counter
        carousel.style.transform = 'translateX(' + (-SIZE * counter) + 'px)';
    }
})

// Autoscroll

setInterval(() => {
    let autoScrollCounter = counter
    if (autoScrollCounter >= carouselImages.length - 1) return
    else {
        carousel.style.transition = "transform 0.7s ease-in-out"
        counter++
        carousel.style.transform = 'translateX(' + (-SIZE * counter) + 'px)'
    }
}, 5000)