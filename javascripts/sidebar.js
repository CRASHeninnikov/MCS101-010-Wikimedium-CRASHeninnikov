	$(function() {
		$('.sidebar a').each(function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				var scrollTo = $(this).attr('href');
				var whitespace = 70
				$('html,body').animate({
					scrollTop: $(scrollTo).offset().top - whitespace
				}, 1000);
			});
		});
	});
