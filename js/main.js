var horizontal = $('.hills').width() - $(window).width()
var vertical = $(window).height() + horizontal
$('body').css('height', vertical);

$(window).on('scroll', function (){
	var px = $(window).scrollTop();	
	$('.hills').css('left', -px);


    console.log(px);
});


