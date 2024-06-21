$(function(){

	function responsive(){
		var w = $(window).width();

		if(w >= 1400){
			//gnb 스크립트
			$('.gnb li').on('mouseenter', function(){
				$('.snb').stop().slideDown();
				$(this).addClass('on').siblings().removeClass('on');
			});
			$('.header').on('mouseleave', function(){
				$('.gnb li').removeClass('on');
				$('.snb').stop().slideUp();
			});

			$('.heads-sub').on('mouseenter', function(){
				$(this).addClass('on');	
			});
			$('.heads-sub').on('mouseleave', function(){
				$(this).removeClass('on');
			});

		}else if(w <= 1400){
			
			$('.hamberger').on('click', function(){
				$('body').addClass('hidden');
				$('.m_hamberger-box').addClass('show');
				$('.snb').addClass('on');
			});

			$('.header .snb .wrapper-md > ul > li > a').on('click', function(){
				$(this).parents('li').toggleClass('on').siblings().removeClass('on');				
			});

			$('.heads-sub').on('click', function(){
				$(this).toggleClass('on').siblings('.heads-sub').removeClass('on');
			});

			$('.m_hamberger-box .close').on('click', function(){
				$('body').removeClass('hidden');
				$('.m_hamberger-box').removeClass('show');
				$('.snb').removeClass('on');
				$('.header .snb .wrapper-md > ul > li').removeClass('on');
				$('.heads-sub').removeClass('on');
			});	

		}
	}
	
	responsive();

	$(window).resize(function(){
		responsive();
	});


	//알림팝업 컨텐츠 닫기버튼 클릭시
	$('#alarmPopup .close-btn').on('click', function(){
		$(this).parents('.box').hide();
	});

	//알림설정 팝업 닫기
	$('#settingPopup .close-btn').on('click', function(){
		$('#settingPopup').removeClass('show');
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


	//디바이스 온/오프 설정
	$('.box-power .box-switch > div').on('click' , function(){
		$(this).parents('.box-power').toggleClass('on');
	});
		



});