$(document).ready(function(){

	$('.portfolio .ico .image').click(function(){
		$('.portfolio .img2').hide(1000);
	});
	$('.portfolio .ico .laptop').click(function(){
		$('.portfolio .img2').show(1000);
	});

});

/*----------------type writer--------------------*/
	$('#jit').typewriter({
		text: ' BISHWAJIT SHIL'
	});

	$('#jit').typewriter({
		waitingTime: 5000
	});
	$("#jit").typewriter({
  		delay: 1000
	});

   new WOW().init();
    


