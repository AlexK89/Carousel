const carouselArrows = document.querySelectorAll('.carousel__arrows');

function carousel(carouselArrow, direction) {
	const carouselImages = carouselArrow.parentNode.querySelectorAll('.images img');

	console.log(carouselImages);
	for (let i = 0; i < carouselImages.length; i++) {
		if (carouselImages[i].classList.contains('active')) {
			carouselImages[i].classList.remove('active');

			if (direction >= 0) {
				if (carouselImages[i+1] === undefined) {
					carouselImages[0].classList.add('active');
				} else {
					carouselImages[i+1].classList.add('active');
				}
			} else {
				if (carouselImages[i-1] === undefined) {
					carouselImages[carouselImages.length - 1].classList.add('active');
				} else {
					carouselImages[i-1].classList.add('active');
				}
			}
			break;
		}
	}
}

function changeImage(arrow) {
	console.log(arrow);
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