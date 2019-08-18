$(document).ready(function(){
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

	// content animate
	var ContANI = $('#main_content > div').children('ul').children('li');
	var ContANI_Group = $('#main_content > div').children('ul');
	ContANI.each(function(i){
		$(this).mouseenter(function(){
			ContANI.not(this).children('a').find('.first').fadeIn(300);
			ContANI.not(this).stop(true, false).animate({
				'height':'126px',
				'top':'0'
			},300);
			$(this).children('a').find('.first').fadeOut(300);
			$(this).stop(true, false).animate({
				'height':'220px',
				'top':'-100px'
			},300);
		});
	});

	ContANI_Group.mouseleave(function(){
		ContANI.children('a').find('.first').fadeIn(500);
		ContANI.stop(true, false).animate({
			'height':'126px',
			'top':'0'
		},300);
	});

	// 화면 컨트롤
	var Move_H = $('#header');
	var Move_F = $('#footer');
	var Move_C = $('#main_content');
	var V_header = $('.view_header');
	var V_content = $('.view_content');

	V_header.click(function(){
		//alert('sdfsd');
		Move_C.animate({
			bottom:'-126px'
		},500, function(){
			Move_H.animate({
				left:'0'
			},500);
			Move_F.animate({
				left:'0'
			},500);
			$('.bg_line01').animate({
				left:'210px'
			},500);
		});
	});

	V_content.click(function(){
		
		Gnb.removeClass('on');
		Gnb.children('ul').hide();
		$('#header').animate({width:"210px"},200, function(){
			Move_H.animate({
				left:'-210px'
			},500);
			$('.bg_line01').animate({
				left:'0'
			},500);
			Move_F.animate({
				left:'-210px'
			},500, function(){
				Move_C.animate({
					bottom:0
				},500)
			});
		});
	});
	
	var Ww = $(window).width();
	var Wh = $(window).height();
	var WWh = $('#wrap').height();

	// 동영상 재생관련 제어 [컨트롤 패널, 자동재생]
	// 비디오 전환 1차 성공 IE중복 처리됨
	// 비디오 영상 전환 기능
	var Mov_chk = $('.mov_lst > li');
	_V_('example_video_1').ready(function() {

		var player = this;
		$('.mov01').on('click', function(event) {
			Mov_chk.removeClass('on');
			$(this).addClass('on');
			player.pause();
			player.src('http://techslides.com/demos/sample-videos/small.mp4'); //예제영상, 업로드시 반영
			player.play();
		});
		$('.mov02').on('click', function(event) {
			Mov_chk.removeClass('on');
			$(this).addClass('on');
			player.pause();
			player.src('http://www.ithinknext.com/mydata/board/files/F201308021823010.mp4'); //예제영상, 업로드시 반영
			player.play();
		});
		$('.mov03').on('click', function(event) {
			Mov_chk.removeClass('on');
			$(this).addClass('on');
			player.pause();
			player.src('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'); //예제영상, 업로드시 반영
			player.play();
		});
	});

//script
});

$(window).load(function(){


});