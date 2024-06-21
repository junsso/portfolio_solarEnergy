$(function(){

	// 팝업 스크립트
	$('[data-popup]').on('click', function(){
		var popupName = $(this).data('popup');
		
		$('body').addClass('active-popup');
		$('#'+popupName+'Popup').addClass('show');
		return false;
	});

	// 팝업 닫기
	$('.popup-overlay, .close-popup').on('click', function(){
		$('.active-popup').removeClass('active-popup');
		$('.popup').removeClass('show');
		return false;
	});

	
	//로그인 후 모달팝업
	$('.close-btn').on('click', function(){
		$('.modal').hide();
	});
	
	//아이디찾기/비밀번호찾기 닫기
	$('.close-btn-a').on('click', function(){
		$(this).parents('.popup').removeClass('show');
	});







});