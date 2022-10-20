// 'use strict'
// $( document ).ready(
// 	function() {
// 	}

// const { keyBy } = require("lodash");

// );
$(function () {
	// First slider announcement-slider__list
	$(".announcement-slider__list").slick({
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 3,
		// autoplay: true,
		// autoplaySpeed: 2000,
		nextArrow: $(".announcement-slider__control_next"),
		prevArrow: $(".announcement-slider__control_prev"),
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 750,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	}); // Second slider main-slider__list

	$(".main-slider__list").slick({
		dots: true,
		dotsClass: "my-dots",
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		nextArrow: $(".main-slider__control_next"),
		prevArrow: $(".main-slider__control_prev")
	}); // // Third slider shop__items

	$(".shop__items").slick({
		dots: true,
		dotsClass: "my-dots",
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '50px',
		infinite: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1 // centerMode: true,
				// centerPadding: '100px',

			}
		}, {
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '75px',
				initialSlide: -1
			}
		}, {
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false,
				centerPadding: false // variableWidth: true,

			}
		}, {
			breakpoint: 601,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// centerMode: false,
				// centerPadding: false,
				variableWidth: true
			}
		}, {
			breakpoint: 426,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// centerMode: true,
				// centerPadding: '10px',
				variableWidth: true
			}
		}, {
			breakpoint: 376,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '10px',
				variableWidth: false
			}
		}, {
			breakpoint: 321,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '5px',
				variableWidth: false
			}
		}]
	}); // Replace Image at the first element cards__item

	$(window).on('load', function (e) {
		if ($(window).width() <= 375) {
			$('.cards__item:nth-child(4) .cards__image').prop('src', 'img/shop-img-1.png');
			$('.cards__item:nth-child(4) .cards__title').text("Magic Bird - 6 Pages Mini Quiet Book");
		}
	}); // cards__item on click

	$(".cards__cart-count").on("click", function () {
		$(this).toggleClass("active");
	}); // Fourth slider favorite__cards

	$(".favorite__cards").slick({
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		nextArrow: $(".favorite-slider__control_next"),
		prevArrow: $(".favorite-slider__control_prev"),
		responsive: [{
			breakpoint: 751,
			settings: {
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	}); // favorite__cards remove two last elements on resolution 750px

	var docWidth = $(document).width();

	function getLastSlide() {
		return $(".favorite__cards").slick("getSlick").slideCount - 1;
	}

	var deleteCount = 2; // if (docWidth <= 749) {

	if (docWidth <= 749) {
		for (var i = 0; i < deleteCount; i++) {
			$('.favorite__cards').slick('slickRemove', getLastSlide());
		}
	} // $(window).on('resize', function () {
	// 	var win = $(this); //this = window
	// 	// if (win.height() >= 820) { /* ... */ }
	// 	if (win.width() <= 750) {
	// 		$("#favorite-cards__item-3, #favorite-cards__item-4").remove();
	// 	} else {
	// 		$("#favorite-cards__item-3, #favorite-cards__item-4").show();
	// 	}
	// });
	// favorite__cards hide arrows on resolution 750px


	function hideButton() {
		$(".favorite__cards").on("afterChange", function () {
			$(".favorite-slider__control").show();
			$(".slick-disabled").hide();
		});
		$(".favorite-slider__control").on("click", function () {
			$(".favorite-slider__controls").toggleClass("right-side");
		}); // $(".favorite__cards").on("afterChange", function () {
		// 	$(".favorite-slider__controls").toggleClass("right-side");
		// });
	}

	hideButton(); // Fifth slider about__slider-list at 1440px resolution

	$(".about__slider-list").slick({
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		//  slidesToScroll: 1,
		nextArrow: $(".slider-controls__control_next"),
		prevArrow: $(".slider-controls__control_prev")
	}); // Tabs about__slider-list

	$('.about__slider-list').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		const link = document.querySelector(`.about__navigation a[data-slide="${currentSlide + 1}"]`);
		$('a[data-slide]').removeClass('active');
		link?.classList?.add('active');
	});
	$('a[data-slide]').on('click', function (e) {
		e.preventDefault();
		var slide = $(this).data('slide');
		$('.about__slider-list').slick('slickGoTo', slide - 1);
		$('a[data-slide]').removeClass('active');
		this.classList.add('active');
	}); // Fifth slider about__mobile-slider-list at 750px resolution

	$(".about__mobile-slider-list").slick({
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: $(".slider-controls__control_next"),
		prevArrow: $(".slider-controls__control_prev")
	}); // Tabs about__mobile-slider-list at 750px resolution

	$('.about__mobile-slider-list').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		const link = document.querySelector(`.about__navigation-mobile a[data-slide="${currentSlide + 1}"]`);
		$('a[data-slide]').removeClass('active');
		link?.classList?.add('active');
	});
	$('a[data-slide]').on('click', function (e) {
		e.preventDefault();
		var slide = $(this).data('slide');
		$('.about__mobile-slider-list').slick('slickGoTo', slide - 1);
		$('a[data-slide]').removeClass('active');
		this.classList.add('active');
	}); // Sixth slider categories__list

	$(".categories__list").slick({
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: false,
		nextArrow: false,
		centerMode: true,
		centerPadding: '60px',
		// mobileFirst: true,//add this one
		responsive: [{
			breakpoint: 1441,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}]
	}); // Seventh follow-us__instagram-list

	$(".follow-us__instagram-list").slick({
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: false,
		nextArrow: false,
		centerMode: true,
		centerPadding: '100px',
		// autoplay: true,
		// mobileFirst: true,//add this one
		responsive: [{
			breakpoint: 1441,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				centerPadding: '240px'
			}
		}, {
			breakpoint: 1301,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerPadding: '240px'
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false
			}
		}, {
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '20px'
			}
		}, {
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '35px'
			}
		}, {
			breakpoint: 541,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '100px' // variableWidth: true,

			}
		}, {
			breakpoint: 461,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '50px'
			}
		}, {
			breakpoint: 376,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px',
				initialSlide: 6
			}
		}]
	}); // Eighth slider stores__list

	$(".stores__list").slick({
		dots: true,
		dotsClass: "my-dots",
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: false,
		nextArrow: false
	}); // Change rating on click

	$(".star-rating > span").on("click", function (e) {
		// remove all active classes first, needed if user clicks multiple times
		$(this).closest('div').find('.active').removeClass('active');
		$(e.target).parentsUntil("div").addClass('active'); // all elements up from the clicked one excluding self

		$(e.target).addClass('active'); // the element user has clicked on

		var numStars = $(e.target).parentsUntil("div").length + 1;
		$('.show-result').text(numStars + (numStars == 1 ? " star" : " stars!"));
	}); // Toggle burger menu

	$('.header__burger-button').on("click", function (event) {
		$('.header__burger-button').toggleClass('active');
		$('.header__mobile-nav').toggleClass('active');
		$('.categories-mobile').toggleClass('hide');
	}); // Nine slider categories__list

	$(".categories-mobile__list").slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 1000,
		prevArrow: false,
		nextArrow: false,
		centerMode: true,
		centerPadding: '20px',
		// mobileFirst: true,//add this one
		responsive: [{
			breakpoint: 441,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '50px'
			}
		}, {
			breakpoint: 374,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '52px'
			}
		}, {
			breakpoint: 321,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '0px',
				initialSlide: 5
			}
		}]
	}); // Tenth slider

	$(".items-mobile__list").slick({
		dots: true,
		dotsClass: "my-dots",
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '220px',
		infinite: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [{
			breakpoint: 751,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				// centerMode: true,
				// centerPadding: '120px',
				variableWidth: true // centerMode: true,
				// centerPadding: '150px',

			}
		}, {
			breakpoint: 321,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true // centerMode: true,
				// centerPadding: '150px',

			}
		}]
	});

	$(window).on('load', function () {
		// Move list item to end of unordered list
		$('.main-nav__list .main-nav__item').filter(':last').insertAfter($('.main-nav__list li:nth-child(7)').last());
		// Moving section categories-mobile inside header right after header__service-mobile
		$('.categories-mobile').insertAfter($('.header__service-mobile'));
		// Adding second class for .favorite-cards__item
		// $('.favorite__cards .favorite-cards__item').first().addClass("favorite-cards__item-left");
		// $('.favorite__cards .favorite-cards__item').last().addClass("favorite-cards__item-right");
		$('.favorite__cards .favorite-cards__item:odd').addClass("favorite-cards__item-right");
		$('.favorite__cards .favorite-cards__item:even').addClass("favorite-cards__item-left");
		$('.favorite__cards .favorite-cards__item:odd .star-rating .icon-star').addClass("active");
		// Change the value of data-slide attribute
		var dataSlide = $('.navigation__item .navigation__link');
		dataSlide.first().attr("data-slide", "1");
		dataSlide.eq(1).attr("data-slide", "2");
		dataSlide.last().attr("data-slide", "3");
		// Set for the first element the active class by default
		dataSlide.first().addClass('active');
		// Change the path to the second image favorite-cards__image on resolution 768px
		if ($(window).width() <= 768) {
			$('.favorite__cards .favorite-cards__item:odd source').prop('srcset', '/assets/favorite-img-2-768.png');
		}
		// Move main navigation inside header
		$(".header__main-nav.main-nav").detach().appendTo('.header__wrapper');
		$(".header__mobile-nav.mobile-nav").detach().appendTo('.header .container').insertAfter('.header__service-mobile');

		// Change the color of a pseudo element
		if ($(".footer").hasClass("background-light-blue")) {
			$(".footer").append('<style>.footer::after{border-color: ' + "#e8f4ff" + ';}</style>');
		} else if ($(".footer").hasClass("background-dark-blue")) {
			$(".footer").append('<style>.footer::after{border-color: ' + "#1363ad" + ';}</style>');
		} else {
			$(".footer").append('<style>.footer::after{border-color: ' + "#f6adad" + ';}</style>');
		}
	});
}); // Dropdown menu

var activeDropdown = {};
document.getElementById('support-dropdown').addEventListener('click', showDropdown);
document.getElementById('about-dropdown').addEventListener('click', showDropdown);
document.getElementById('products-dropdown').addEventListener('click', showDropdown);
document.getElementById('language-dropdown').addEventListener('click', showDropdown);
document.getElementById('mobile-language-dropdown').addEventListener('click', showDropdown);
document.getElementById('mobile-products-dropdown').addEventListener('click', showDropdown);
document.getElementById('mobile-about-dropdown').addEventListener('click', showDropdown);
document.getElementById('mobile-support-dropdown').addEventListener('click', showDropdown);

function showDropdown(event) {
	if (activeDropdown.id && activeDropdown.id !== event.target.id) {
		activeDropdown.element.classList.remove('active');
	}

	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i].classList.contains('dropdown-selection')) {
			activeDropdown.id = this.id;
			activeDropdown.element = this.children[i];
			this.children[i].classList.add('active');
		} //adding the dropdown-button to our object
		else if (this.children[i].classList.contains('dropdown-button')) {
			activeDropdown.button = this.children[i];
		}
	}
} // var dropdownBtn = document.getElementsByClassName('dropdown-button');
// dropdownBtn[1].onclick = function (event) {
// 	if (activeDropdown.element.classList.contains('active')) {
// 		activeDropdown.element.classList.remove('active');
// 	}
// 	console.log('click');
// }
// $('.dropdown-button').on('click', function (event) {
// 	if ($('.dropdown-selection').hasClass('active')) {
// 		$('.dropdown-selection').removeClass('active');
// 		console.log('click!');
// 	}
// });


window.onclick = function (event) {
	if (!event.target.classList.contains('dropdown-button')) {
		activeDropdown.element.classList.remove('active');
	}
};
/* Modal Popup */
// Cache selectors

var html = $('html'),
	demo = $('.demo'),
	modal = $('.modal'),
	modalShow = $('.main-slider__buy-button'),
	modalHide = $('.modal-hide'),
	modalWrapper = $('.modal-wrapper'); // Modal Show

modalShow.on('click', function (e) {
	e.preventDefault(); // html.addClass('no-scroll');

	modal.addClass('is-visible');
	demo.attr('aria-hidden', 'true');
	modal.attr({
		'aria-hidden': 'false',
		'open': 'true',
		'tabindex': '0'
	});
}); // Modal Hide

modalHide.on('click', function (e) {
	e.preventDefault();
	html.removeClass('no-scroll');
	modal.removeClass('is-visible');
	demo.attr('aria-hidden', 'false');
	modal.attr('aria-hidden', 'true');
	modal.removeAttr('open tabindex');
}); // Prevent toggle event from bubbling

modalWrapper.on('click', function (e) {
	e.stopPropagation();
});
/* Modal Popup */
//# sourceMappingURL=app.js.map


// search bar start
// $('.js-drawer-open-top').on('click', function (event) {
// 	$('#SearchDrawer').addClass('js-drawer-open-top');
// });

// $(".search-bar__close").on("click keydown keyup", function (event) {
$(".search-bar__close").on("click", function (event) {
	$('#SearchDrawer').removeClass("js-drawer-open-top");
});

$(".js-drawer-open-top").on("click", function (e) {
	e.stopPropagation();
	$("#SearchDrawer").toggleClass("js-drawer-open-top");
});

$(document).on("click", function (event) {
	if (!$(event.target).closest('#SearchDrawer').length) {
		if ($('#SearchDrawer').is(":visible")) {
			$('#SearchDrawer').removeClass("js-drawer-open-top");
		}
	}
});

// Close on esc keypress
$(document).on("keyup", function (e) {
	if ($('#SearchDrawer').hasClass('js-drawer-open-top') && e.keyCode === 27) { // ESC
		$('#SearchDrawer').removeClass('js-drawer-open-top');
	}
})

// $(document).on("click", function (event) {
// 	var $target = $(event.target);
// 	if (!$target.closest('#SearchDrawer').length &&
// 		$('#SearchDrawer').is(":visible")) {
// 		$('#SearchDrawer').hide();
// 		console.log(!$target.closest('#SearchDrawer').length);
// 	}
// });


// $(document).on('click', function (e) {
// 	var el = $('#SearchDrawer');
// 	if ($(e.target).closest(el).length) return;
// 	$('#SearchDrawer').hide();
// 	console.log($(e.target).closest(el).length);
// });

// search bar end
