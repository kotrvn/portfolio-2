$(function() {

$('.wrapper__container').removeClass('active');
 $('#js-card-toggle').on('click', function(e) {
	$('.wrapper__container').toggleClass('active');
 });

});
