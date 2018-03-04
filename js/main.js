const carouselArrows = document.querySelectorAll('.carousel__arrows');

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
	if (carouselImages[i-1] === undefined) {
		carouselImages[carouselImages.length - 1].classList.add('active');
	} else {
		carouselImages[i-1].classList.add('active');
	}
}

function moveToTheRight(carouselImages, i) {
	if (carouselImages[i+1] === undefined) {
		carouselImages[0].classList.add('active');
	} else {
		carouselImages[i+1].classList.add('active');
	}
}
function changeImage(arrow) {
	if (arrow.classList.contains('left_arrow')) {
		carousel(arrow , -1);
	}
	if (arrow.classList.contains('right_arrow')) {
		carousel(arrow , 1)
	}
}

for (let carouselArrow of carouselArrows) {
	carouselArrow.addEventListener('click', function () {
		changeImage(this);
	})
}