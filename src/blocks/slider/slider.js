const slider = document.querySelectorAll('.slider__container .slider__line img');
const sliderLine = document.querySelector('.slider__container .slider__line');
let dots = document.getElementsByClassName("slider__dot");
let count = 0;
let width;

function init() {
	console.log('resize');
	width = document.querySelector('.slider__container').offsetWidth;
	sliderLine.style.width = width * slider.length + 'px';
	slider.forEach(item => {
		item.style.width = width + 'px';
	});
	rollSlider();
}

init();
window.addEventListener('resize', init);

function  sliderNext() {
	count++;
	if (count >= slider.length) {
		count = 0;
	}
	dotSlider(count);
	rollSlider();
}

function sliderPrev() {
	count--;
	if (count < 0) {
		count = slider.length - 1;
	}
	dotSlider(count);
	rollSlider();
}

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


function showslider(n) {
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