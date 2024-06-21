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

});