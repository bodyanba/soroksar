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
  			items: 2,
		    nav: true,
		    dots: false,
  		},
  		1500: {
  			items: 3,
		    nav: true,
		    dots: false,
  		},
  	},
    items: 3,
    margin: 18,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.owl-2').owlCarousel({
  	responsive: {
  		1200: {
		    nav: true,
		    dots: false,
  		},
  	},
    items: 1,
    margin: 15,
    smartSpeed: 1000,
    navText: ['', ''],
    autoHeight: true,
  });

  $('.video-modal').on('show.bs.modal', function() {
    var src = 'https://www.youtube.com/embed/OKW018foQmg?autoplay=1';
    $(this).find('iframe').attr('src', src);
  }).on('hidden.bs.modal', function() {
    $(this).find('iframe').removeAttr('src');
	});

	$('input[name="options"]').on('change', function() {
		if ($(this).val() == '1')
			$('#row').removeClass('active')
		else 
			$('#row').addClass('active')
	});

});









