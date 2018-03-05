const carousels = document.querySelectorAll('.carousel');
const carouselArrows = document.querySelectorAll('.carousel__arrows');

for (let carouselArrow of carouselArrows) {
	carouselArrow.addEventListener('click', function () {
		changeImage(this);
	})
}

function changeImage(arrow = document.querySelector('.right_arrow')) {
	// resetInterval(arrow.parentNode);
	if (arrow.classList.contains('left_arrow')) {
		switchCarouselImage(arrow, -1);
	}
	if (arrow.classList.contains('right_arrow')) {
		switchCarouselImage(arrow, 1)
	}

}

function switchCarouselImage(carouselArrow, direction) {
	const carouselImages = carouselArrow.parentNode.querySelectorAll('.images img');

	for (let i = 0; i < carouselImages.length; i++) {
		if (carouselImages[i].classList.contains('active')) {
			carouselImages[i].classList.remove('active');

			moveToNextImage(carouselImages, i, direction);
			break;
		}
	}
}

function moveToNextImage(carouselImages, newImagePosition, direction) {
	const carousel = carouselImages[newImagePosition].parentNode.parentNode;
	const interval = carousel.dataset.interval * 1000;

	newImagePosition += direction;

	switch (true) {
		case (!carouselImages[newImagePosition] && direction > 0):
			carouselImages[0].classList.add('active');
			break;
		case (!carouselImages[newImagePosition] && direction < 0):
			carouselImages[carouselImages.length - 1].classList.add('active');
			break;
		default:
			carouselImages[newImagePosition].classList.add('active');
	}
}

// Carousel interval
function resetInterval (carousel) {
	const interval = carousel.dataset.interval * 1000;
	const nextArrow = carousel.querySelector('.right_arrow');

	setInterval(()=> {
		changeImage(nextArrow);
	}, interval);
}
for (const carousel of carousels) {
	resetInterval(carousel);
}