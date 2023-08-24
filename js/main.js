window.addEventListener('scroll', function(){
	console.log(scrollY)
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll'):document.querySelector('.header').classList.remove('scroll')
 })



const swiper = new Swiper('.materials-swiper', {
	// Optional parameters
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
 });
