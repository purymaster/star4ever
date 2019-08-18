$(function(){
	var Gnb = $('.dept01').children('li');
	var SubGnb = $('.dept02').children('li').children('span');
	var SubAdd = $('.sub_add');

	Gnb.each(function(i){
		$(this).click(function(){
			SubAdd.removeClass('on').children('ul').hide();
			if ( $(this).hasClass('on'))
			{
				$('#header').animate({width:"210px"},200);
				Gnb.removeClass('on');
				Gnb.children('ul').hide();
			} else {
				$('#header').animate({width:"420px"},200);
				Gnb.removeClass('on');
				$(this).addClass('on');
				Gnb.children('ul').hide();
				$(this).children('ul').show();
			}
		});
	});

	SubAdd.each(function(){
		$(this).click(function(){
			if ( $(this).hasClass('on') )
			{
				SubAdd.removeClass('on');
				$(this).children('ul').slideUp();
			} else {
				SubAdd.removeClass('on');
				SubAdd.children('ul').slideUp();
				$(this).addClass('on');
				$(this).children('ul').slideDown();
			}
			return false;
		});
	});

	/* FAQ 제어 */
	
	//var faq_data = $(".faq ul.qna li");
	var faq_question = $(".faq ul.qna li a");
	var faq_answer = $(".faq ul.qna li div");
	/*
	faq_data.click(function(){
		faq_question.removeClass("on");
		faq_answer.stop().delay(250).slideUp(250);
		$(this).children("a").addClass("on");
		if($(this).children("div").css('display')=='none'){
			$(this).children("div").stop().delay(250).slideDown(500);
		} else {
			$(this).children("a").removeClass("on");
			faq_answer.stop().delay(250).slideUp(250);
		};
	});
	*/

	faq_question.click(function(){
		faq_question.removeClass("on");
		faq_answer.stop(true,false).slideUp(250);
		$(this).addClass("on");
		if($(this).parent().children("div").css('display')=='none'){
			$(this).parent().children("div").stop(true,false).slideDown(500);
		} else {
			$(this).removeClass("on");
			faq_answer.stop(true,false).slideUp(250);
		};
	});
	
	/* MAP 제어 */
	
	var map_menu = $(".modal_map .menu li");
	var map_box = $(".modal_map .map_data");
	var seoul = $(".modal_map .menu li.seo");
	var yang = $(".modal_map .menu li.yang");
	
	map_menu.click(function(){
		$(".modal_map .menu li").removeClass("on");
		$(this).addClass("on");
		
		map_box.hide();
		if(seoul.hasClass("on")){
			$(".modal_map .loca1").show();
		} else {
			$(".modal_map .loca2").show();
		};
	});

	// 장례예절
	var StepView = $('.lst_step_num').children('li');
	var StepViewer = $('.info_cont').children('div');
	StepView.each(function(i){
		$(this).children('strong').click(function(){
			StepView.children('strong').removeClass('on');
			StepViewer.hide();
			$(this).children('strong').addClass('on');
			StepViewer.eq(i).show();
			//alert(i);
		});
	});
	
	/* MAGAZINE 제어 */

	var MzBtn = $('.mz_head .btn');
	var MzList = $('.mz_list');
	var MzLink = $('.mz_list').find('a');
	var MzCont = $('.mz_cont');
	
	MzBtn.click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on')
			$(this).attr('src','../../images/btn_close_on.gif');
			MzList.stop(true,true).slideDown();
		} else {
			$(this).addClass('on')
			$(this).attr('src','../../images/btn_list.gif');
			MzList.stop(true,true).slideUp();
		};
	});
	
	MzLink.each(function(i){
		var MzNum = 4 - i;
		$(this).click(function(){
			MzCont.hide();
			$('.cont'+MzNum).show();
			MzList.stop(true,true).slideUp();
			MzBtn.addClass('on')
			MzBtn.attr('src','../../images/btn_list.gif');
		});
	});
});