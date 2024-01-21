var navbar = document.querySelector('.headbox')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}





const slides = document.querySelectorAll('.slide');
		const dots = document.querySelectorAll('.dot');

		let currentSlide = 0;

		function showSlide(index) {
			slides.forEach((slide) => {
				slide.style.display = 'none';
				slide.style.opacity = '0';
			});
			slides[index].style.display = 'block';
			slides[index].style.opacity = '1';

			dots.forEach((dot) => {
				dot.classList.remove('actived');
			});
			dots[index].classList.add('actived');
		}

		function nextSlide() {
			currentSlide = (currentSlide + 1) % slides.length;
			showSlide(currentSlide);
		}

		dots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				showSlide(index);
				currentSlide = index;
			});
		});

		setInterval(nextSlide, 13000); // Auto slide every 3 seconds

		showSlide(currentSlide);