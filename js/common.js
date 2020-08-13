$(document).ready(function() {

  $('.owl-1').owlCarousel({
  	responsive: {
  		0: {
  			items: 1
  		},
  		992: {
  			items: 2
  		},
  		1200: {
  			items: 3,
  		},
  	},
    margin: 20,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-2').owlCarousel({
    items: 1,
    margin: 20,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('#search').on('click', function() {
    $('.header').toggleClass('search-open');
  });

  $('#sandwich').on('click', function() {
    $('body').toggleClass('menubar-in');
  });

});









