// Слайдер скриншотов интерфейса

new Swiper (".image-slider", {
	loop: true,
	loopedSlides: 4,
	slidesPerView: 1,
	centeredSlides: true,
	initialSlide: 1,
	spaceBetween: 60,

	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	//пагинация
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	mousewheel: {
		sensitivity: 1, 
	},
	
	breakpoints: {
		920: {
			slidesPerView: 2,
			spaceBetween: -120,
		},
		1150: {
			spaceBetween: -300,
		},
		1300: {
			spaceBetween: -800,
		},
		1400: {
			spaceBetween: -1000,
		},
	},
});


// Слайдер скриншотов комменатриев

new Swiper (".comments-slider", {
	//стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	mousewheel: {
		sensitivity: 1, 
	},
	slidesPerView: 1,
	centeredSlides: true,
	initialSlide: 1,
	loop: true,
	loopedSlides: 3,
	effect: 'slide',
	breakpoints: {
		
	}, 
});