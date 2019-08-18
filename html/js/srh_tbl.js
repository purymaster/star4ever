$(function(){

	// 각각 테이블의 초기 선언
	$('.lst_hall').each(function(i){

		// 구간별 tr 변수선언
		var xTarget = $(this).children('.board_list').children('table').children('tbody').children('tr');
		// 구간별 tbody 변수선언
		var xTarget_body = $(this).children('.board_list').children('table').children('tbody');
		// 구간별 tr 길이값
		var xCnt = xTarget.length;
		//페이징 정수값
		var xCnt_Math = Math.ceil(xCnt / 10);
		// 페이징
		var PagingX = $(this).find('.pagenation').children('.page_list');
		// 처음보기
		var PagingFirst = $(this).find('.pagenation').children('a').eq(0);
		// 이전보기
		var PagingPrev = $(this).find('.pagenation').children('a').eq(1);
		// 다음보기
		var PagingNext = $(this).find('.pagenation').children('.next_button');
		// 마지막보기
		var PagingLast = $(this).find('.pagenation').children('a').eq(3);
		
		// 지역
		var Dp_Loc = $('.srh_loc > ul > li > span');
		// 페이징 번호 카운트
		Btn_Cnt = 0;
		// 페이징 번호 카운트 [보여주기]
		var Btn_Cnt_lng = 0;
		// 페이징 카운트 리셋
		Reset_Cnt = 0;


		// ------------------------------------------------------------------------------ 지역 선택 리셋
		Dp_Loc.each(function(i){
			$(this).click(function(){
				if ($(this).hasClass('on'))
				{
					return false;
				} else if (!$(this).hasClass('on'))
				{
					Dp_Loc.removeClass('on');
					$(this).addClass('on');
					$('.lst_hall').css('display','none');
					$('.lst_hall').eq(i).css('display','block');
					// 페이징 번호 리셋
					$('.lst_hall').eq(i).find('.pagenation').children('.page_list').children().removeClass('on').css('display','none');
					$('.lst_hall').eq(i).find('.pagenation').children('.page_list').children().eq(0).addClass('on');
					$('.lst_hall').eq(i).find('.pagenation').children('.page_list').children().slice(0 , 10).css('display','inline-block');
					// tr 보여주기 리셋
					$('.lst_hall').eq(i).children('.board_list').children('table').children('tbody').children('tr').css('display','none');
					$('.lst_hall').eq(i).children('.board_list').children('table').children('tbody').children('tr').slice(0 , 10).css({"display":"","*display":"block"});
					// 페이징 카운트 0로 만들기 위한 변수
					Reset_Cnt = 1;
				}
			});
		});
		// ------------------------------------------------------------------------------ 지역 선택 리셋


		// ------------------------------------------------------------------------------ 각 테이블별 초기 10개까지만 보이기
		for (var i = 0; i < 10; i++)
		{
			//xTarget.eq(i).css({"display":"","*display":"block"});
			xTarget.eq(i).css("display","");
		}
		// ------------------------------------------------------------------------------ 각 테이블별 초기 10개까지만 보이기


		// ------------------------------------------------------------------------------ 페이지별 페이징 처리
		Page_Num(xCnt_Math);

		function Page_Num(xCnt_Math) {
			for (var i = 1; i < xCnt_Math + 1; i++)
			{
				PagingX.append('<a href="#">' + i + '</a>');
			}
			PagingX.children().eq(0).addClass('on');
			PagingX.children('a:gt(9)').css('display','none');
		}
		// ------------------------------------------------------------------------------ 페이지별 페이징 처리


		// ------------------------------------------------------------------------------ 페이징 기능
		
		PagingX.children().each(function(PageNum){
			$(this).click(function(event){
				event.preventDefault();

				if (Reset_Cnt == 1)
				{
					Reset_Cnt = 0;
				}

				// a tag 클래스 부여
				PagingX.children().removeClass('on');
				$(this).addClass('on');

				// 각기 페이징의 부모 테이블 tbody
				var Dp_TR = $(this).parents('.lst_hall').find('table').children('tbody');
				var Dp_var = (PageNum + 1) * 10;

				// tr 10개씩 보여주기
				Dp_TR.children('tr').css('display','none');
				Dp_TR.children('tr').slice(Dp_var - 10 , Dp_var).css({"display":"","display":"table-row"});

				Btn_Cnt = PageNum;
			});
		});
		// ------------------------------------------------------------------------------ 페이징 기능

		// ------------------------------------------------------------------------------ 처음버튼
		PagingFirst.click(function(event){
			event.preventDefault();

			// 페이징 카운트 초기화
			if (Reset_Cnt == 1)
			{
				Btn_Cnt = 0;
				Reset_Cnt = 0;
			}

			Btn_Cnt = 0;

			Btn_Cnt_lng = Math.floor((Btn_Cnt + 1) / 10);

			ViewLng = (Btn_Cnt_lng * 10);

			// 페이지 넘버 클래스 추가 (길이값 대응)
			if (Btn_Cnt <= -1)
			{
				Btn_Cnt = 0;
				return false;
			}
			else 
			{
				PagingX.children().css('display','none');
				for (var i = ViewLng; i < ViewLng + 11; i++)
				{
					if (i == 0)
					{
						PagingX.children().eq(0).css({"display":"","*display":"block"});
					} else {
					PagingX.children().eq(i - 1).css({"display":"","*display":"block"});
					}
				}
				PagingX.children().removeClass('on');
				PagingX.children().eq(Btn_Cnt).addClass('on');
			}

			// 각기 페이징의 부모 테이블 tbody
			var Dp_TR = $(this).parents('.lst_hall').find('table').children('tbody');
			var Dp_var = (Btn_Cnt + 1) * 10;

			// tr 10개씩 보여주기
			Dp_TR.children('tr').css('display','none');
			Dp_TR.children('tr').slice(Dp_var - 10 , Dp_var).css({"display":"","*display":"block"});

		});
		// ------------------------------------------------------------------------------ 처음버튼

		// ------------------------------------------------------------------------------ 이전버튼
		PagingPrev.click(function(event){
			event.preventDefault();

			// 페이징 카운트 초기화
			if (Reset_Cnt == 1)
			{
				Btn_Cnt = 0;
				Reset_Cnt = 0;
			}

			Btn_Cnt = Btn_Cnt - 10;

			Btn_Cnt_lng = Math.floor((Btn_Cnt + 1) / 10);

			ViewLng = (Btn_Cnt_lng * 10);

			// 페이지 넘버 클래스 추가 (길이값 대응)
			if (Btn_Cnt <= -1)
			{
				Btn_Cnt = 0;
				return false;
			}
			else 
			{
				PagingX.children().css('display','none');
				for (var i = ViewLng; i < ViewLng + 10; i++)
				{
					if (i == 0)
					{
						PagingX.children().eq(0).css({"display":"","*display":"block"});
					} else {
					PagingX.children().eq(i).css({"display":"","*display":"block"});
					}
				}
				PagingX.children().removeClass('on');
				PagingX.children().eq(ViewLng).addClass('on');
			}

			// 각기 페이징의 부모 테이블 tbody
			var Dp_TR = $(this).parents('.lst_hall').find('table').children('tbody');
			var Dp_var = (Btn_Cnt + 1) * 10;

			// tr 10개씩 보여주기
			Dp_TR.children('tr').css('display','none');
			Dp_TR.children('tr').slice(ViewLng * 10, (ViewLng * 10) + 10).css({"display":"","*display":"block"});

		});
		// ------------------------------------------------------------------------------ 이전버튼

		// ------------------------------------------------------------------------------ 다음버튼
		PagingNext.click(function(event){
			event.preventDefault();

			// 페이징 카운트 초기화
			if (Reset_Cnt == 1)
			{
				Btn_Cnt = 0;
				Reset_Cnt = 0;
			}

			Btn_Cnt = Btn_Cnt + 10;

			Btn_Cnt_lng = Math.floor((Btn_Cnt) / 10);

			ViewLng = (Btn_Cnt_lng * 10);

			Block_Cnt = Math.floor((PagingX.children().length) / 10);

			// 페이지 넘버 클래스 추가 (길이값 대응)
			if (Btn_Cnt >= ((Block_Cnt * 10) + 10))
			{
				Btn_Cnt = PagingX.children().length - 1;
				return false;
			}
			else 
			{
				PagingX.children().css('display','none');
				for (var i = ViewLng; i < ViewLng + 10; i++)
				{
					if (i == 0)
					{
						PagingX.children().eq(0).css({"display":"","*display":"block"});
					} else {
					PagingX.children().eq(i).css({"display":"","*display":"block"});
					}
				}
				PagingX.children().removeClass('on');
				PagingX.children().eq(ViewLng).addClass('on');
			}

			// 각기 페이징의 부모 테이블 tbody
			var Dp_TR = $(this).parents('.lst_hall').find('table').children('tbody');
			var Dp_var = (Btn_Cnt + 1) * 10;

			// tr 10개씩 보여주기
			Dp_TR.children('tr').css('display','none');
			Dp_TR.children('tr').slice(ViewLng * 10, (ViewLng * 10) + 10).css({"display":"","*display":"block"});

		});
		// ------------------------------------------------------------------------------ 다음버튼

		// ------------------------------------------------------------------------------ 마지막버튼
		PagingLast.click(function(event){
			event.preventDefault();

			// 페이징 카운트 초기화
			if (Reset_Cnt == 1)
			{
				Btn_Cnt = 0;
				Reset_Cnt = 0;
			}

			Btn_Cnt = PagingX.children().length -1;

			//alert(PagingX.children().length);

			Btn_Cnt_lng = Math.floor((Btn_Cnt + 1) / 10);

			ViewLng = (Btn_Cnt_lng * 10);

			// 페이지 넘버 클래스 추가 (길이값 대응)
			if (Btn_Cnt >= PagingX.children().length)
			{
				Btn_Cnt = PagingX.children().length - 1;
				return false;
			}
			else 
			{
				PagingX.children().css('display','none');
				for (var i = ViewLng; i < ViewLng + 10; i++)
				{
					if (i == 0)
					{
						PagingX.children().eq(0).css({"display":"","*display":"block"});
					} else {
					PagingX.children().eq(i).css({"display":"","*display":"block"});
					}
				}
				PagingX.children().removeClass('on');
				PagingX.children().eq(Btn_Cnt).addClass('on');
			}

			// 각기 페이징의 부모 테이블 tbody
			var Dp_TR = $(this).parents('.lst_hall').find('table').children('tbody');
			var Dp_var = (Btn_Cnt + 1) * 10;

			// tr 10개씩 보여주기
			Dp_TR.children('tr').css('display','none');
			Dp_TR.children('tr').slice(Dp_var - 10 , Dp_var).css({"display":"","*display":"block"});

		});
		// ------------------------------------------------------------------------------ 마지막버튼


	// 테이블
	});


// script
});