$(document).ready(function () {
	$(".burger-menu").click(function () {
		$(this).toggleClass("menu-on");
		$('nav').toggleClass('active');
	});

	$(".brands-block__slider").slick({
		autoplay: true,
		arrows: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.vacancy__button').click(function (){
		if(!$(this).parent().siblings('.vacancy__content').hasClass('active')){
			$(this).text('Закрыть');
		} else {
			$(this).text('Подробнее');
		}
		$(this).parent().siblings('.vacancy__content').toggleClass('active');
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
});