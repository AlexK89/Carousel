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

			if (direction >= 0) {
				moveToTheRight(carouselImages, i);
			} else {
				moveToTheLeft(carouselImages, i);
			}
			break;
		}
	}
}

function moveToTheLeft(carouselImages, i) {
	let position = --i;
	if (carouselImages[position] === undefined) {
		carouselImages[carouselImages.length - 1].classList.add('active');
	} else {
		carouselImages[position].classList.add('active');
	}
}

function moveToTheRight(carouselImages, i) {
	let position = ++i;
	if (carouselImages[position] === undefined) {
		carouselImages[0].classList.add('active');
	} else {
		carouselImages[position].classList.add('active');
	}
}