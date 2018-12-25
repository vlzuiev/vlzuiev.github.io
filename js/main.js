$(document).ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},3000);
    });
    
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10) {
            $("#top-navbar").css({
                backgroundColor: 'rgba(245, 245, 245, 0.9)',
	            transition: 'background-color .5s ease-in-out'
                
            });
        }  else{
            $("#top-navbar").css({
                backgroundColor: 'transparent',
	            transition: 'background-color .5s ease-in-out'
                
            });
        }
    });
});

$('.Count').each(function () {
  var $this = $(this);
  $({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 3000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});