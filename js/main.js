$(document).ready(function () {
    $(document).on('click', '.cta', function () {
        $(this).toggleClass('active');
    }); 
    
});
$(function(){
	$('#news-container').vTicker({ 
		speed: 500,
		pause: 3000,
		animation: 'fade',
		mousePause: false,
		showItems: 3
	});
});