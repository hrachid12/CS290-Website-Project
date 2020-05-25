// Assign needed elements to variables
var carousel = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');
var prevButton = document.querySelector('#prev');
var nextButton = document.querySelector('#next');

// Set carousel to first image
let counter = 1;
let SIZE = 1281;
carousel.style.transform = 'translateX(' + -SIZE * counter + 'px)';

// Button listeners
nextButton.addEventListener('click', () => {
	if (counter >= carouselImages.length - 1) return;
	carousel.style.transition = 'transform 0.7s ease-in-out';
	counter++;
	carousel.style.transform = 'translateX(' + -SIZE * counter + 'px)';
});

prevButton.addEventListener('click', () => {
	if (counter <= 0) return;
	carousel.style.transition = 'transform 0.7s ease-in-out';
	counter--;
	carousel.style.transform = 'translateX(' + -SIZE * counter + 'px)';
});

carousel.addEventListener('transitionend', () => {
	if (carouselImages[counter].id === 'lastClone') {
		carousel.style.transition = 'none';
		counter = carouselImages.length - 2;
		carousel.style.transform = 'translateX(' + -SIZE * counter + 'px)';
	} else if (carouselImages[counter].id === 'firstClone') {
		carousel.style.transition = 'none';
		counter = carouselImages.length - counter;
		carousel.style.transform = 'translateX(' + -SIZE * counter + 'px)';
	}
});

// Autoscroll

setInterval(() => {
	let autoScrollCounter = counter;
	if (autoScrollCounter >= carouselImages.length - 1) return;
	else {
		carousel.style.transition = 'transform 0.7s ease-in-out';
		counter++;
		carousel.style.transform = 'translateX(' + -SIZE * counter + 'px)';
	}
}, 9000);
