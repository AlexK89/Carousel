const carouselArrows = document.querySelectorAll('.carousel__arrows');

for (let carouselArrow of carouselArrows) {
	carouselArrow.addEventListener('click', function () {
		changeImage(this);
	})
}

function changeImage(arrow) {
	if (arrow.classList.contains('left_arrow')) {
		carousel(arrow, -1);
	}
	if (arrow.classList.contains('right_arrow')) {
		carousel(arrow, 1)
	}
}

function carousel(carouselArrow, direction) {
	const carouselImages = carouselArrow.parentNode.querySelectorAll('.images img');

	for (let i = 0; i < carouselImages.length; i++) {
		if (carouselImages[i].classList.contains('active')) {
			carouselImages[i].classList.remove('active');

			moveToNextImage(carouselImages, i, direction);
			break;
		}
	}
}

function moveToNextImage(carouselImages, i, direction) {
	let newImagePosition = i + direction;

	if (carouselImages[newImagePosition] === undefined && direction > 0) {
		carouselImages[0].classList.add('active');
	} else if (carouselImages[newImagePosition] === undefined && direction < 0) {
		carouselImages[carouselImages.length - 1].classList.add('active');
	} else {
		carouselImages[newImagePosition].classList.add('active');
	}
}