$(function(){


	function responsive(){
		var w = $(window).width();

		if(w >= 1400){
			
			//애니메이션효과
			new WOW().init();
			
			//gnb
			$('.gnb > ul > li').on('mouseenter', function(){
				$(this).children('.snb').stop().slideDown();
				$('.header .bg').stop().slideDown();
				$('.header').addClass('on');
			});

			$('.gnb > ul > li').on('mouseleave', function(){
				$(this).children('.snb').stop().slideUp();
				$('.header .bg').stop().slideUp();
				$('.header').removeClass('on');
			});

			$('.header').on('mouseleave', function(){
				$('.snb').stop().slideUp();
				$('.header .bg').stop().slideUp();
			});

		}else if(w <= 1399){
			
			$('.hamberger').on('click', function(){
				$('body').addClass('hidden');
				$('.gnb').addClass('active');
				$('.m_hamberger-box').addClass('show');
			});

			$('.gnb > ul > li').on('click', function(){
				$(this).toggleClass('active');
				$(this).siblings().removeClass('active');
			});

			$('.m_hamberger-box .close').on('click', function(){
				$('.m_hamberger-box').removeClass('show');
				$('.gnb').removeClass('active');
				$('body').removeClass('hidden');
			});
		}
	}
	
	responsive();

	$(window).resize(function(){
		responsive();
	});

	//메인 실시간 청약 현황
	$('.slick-wrap').slick({
		slidesToShow: 1,
		swipeToSlide: true, //슬라이드에 상관없이 직접 드래그하거나 스와이프 하는 기능
		autoplay:false, //자동실행
		pauseOnHover:false, //마우스올렸을때 멈춤기능
		swipe:true, //pc에서는 마우스 드래그이동, 모바일은 손으로 쓸어넘기는 기능
		slide:'div', //슬라이드로 사용할 엘리먼트 지정
		arrows: false,
		dots: true,
		infinite: false,
	});

	//서브페이지 탭메뉴
	$('.tabs ul li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs ul li').removeClass('current')
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});


	//캘린더
	 $(function() {
	//모든 datepicker에 대한 공통 옵션 설정
		$.datepicker.setDefaults({
			dateFormat: 'yy-mm-dd',
			showOn: 'both', //달력아이콘
			inline: true,
			showOtherMonths: true,
			showMonthAfterYear: true,
			monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			changeMonth: true, 
			changeYear: true,
		});

		//input을 datepicker로 선언
		$("#datepicker").datepicker(); 
		$("#datepicker2").datepicker();
		//From의 초기값을 오늘 날짜로 설정
		$('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전)
		$('#datepicker2').datepicker('setDate', '+1D'); //(+1D:하루후, -1M:한달후, -1Y:일년후)
	});


	//고객센터 토글
	$(".title-wrap").on('click' , function() {		
		$(this).toggleClass('on');
		//클릭된 나 자신을 제외한 나머리 링크들은 on 클래스를 무조건 제거
		$(".title-wrap").not(this).removeClass("on");

		// 펼칠 내용 영역 선택
		var target = $(this).parents("li").find(".sub-contents");
		// 나머지 내용 영역을 선택
		var other = $(".title-wrap").not(this).parents("li").find(".sub-contents");
		// 애니메이션으로 열고 닫기 처리
		target.slideToggle(300);
		other.slideUp(300);

		// 링크 페이지 이동 중지
		return false;
	});


	//파일찾기
	$(document).ready(function(){ 
		var fileTarget = $('#file'); 
		fileTarget.on('change', function(){ // 값이 변경되면
		var cur=$(".filebox input[type='file']").val();
		$(".upload-name").val(cur);
		}); 
	});



});