;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		var $header = $('.header');

		$('.burger-menu').on('click', function(e){
			e.preventDefault();

			$(this).toggleClass('active');

			$('.nav').toggleClass('open');
		});

		$('.nav__overlay').on('click', function (){
			$('.burger-menu').trigger('click');
		});

		$win.on('scroll', function(){

			if($win.scrollTop() > 0) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}
		});
	});
})(jQuery, window, document);
