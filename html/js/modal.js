$(function(){
	$(window).load(function(){
		var Modal = $('.modal_layer').css('height');
		var Gnb = $('#header').css('height');
		
		if(Modal <= Gnb){
			$('#header').css('height',Modal);
			$('.bg_line01').css('height',Modal);
		} else {
			$('.modal_layer').css('height',Gnb);
		};
	});
});
