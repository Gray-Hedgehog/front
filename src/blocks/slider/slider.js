const slides = document.querySelectorAll('.slider__container .slider-line img');
const sliderLine = document.querySelector('.slider__container .slider-line');
let dots = document.getElementsByClassName("slider__dot");
let count = 0;
let width;

function init() {
	console.log('resize');
	width = document.querySelector('.slider__container').offsetWidth;
	sliderLine.style.width = width * slides.length + 'px';
	slides.forEach(item => {
		item.style.width = width + 'px';
	});
	rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__btn-next').addEventListener('click', function () {
	count++;
	if (count >= slides.length) {
		count = 0;
	}
	dotSlider(count);
	rollSlider();
});

document.querySelector('.slider__btn-prev').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = slides.length - 1;
	}
	dotSlider(count);
	rollSlider();
});

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


function showSlides(n) {
	count = n;
	dotSlider(count);
	rollSlider();
}


function dotSlider(count) {
	for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
			console.log("dot" + i );
		}
	dots[count].className += " active";
}