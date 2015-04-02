var sdegree = 0;

$(window).scroll(function() {
	
	sdegree ++ ;
	sdegree = sdegree + 1 ;
	var srotate = "rotate(" + sdegree + "deg)";
	$(".logo").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height()) {
		$('#box-3 .bordered-white').addClass('move-left');
	}
	else {
		$('#box-3 .bordered-white').removeClass('move-left');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height()) {
		$('#box-3 .bordered-white.first').addClass('move-right');
	}
	else {
		$('#box-3 .bordered-white.first').removeClass('move-right');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + $('#box-4').height()) {
		$('#box-5 .box').removeClass('zero-width');
	}
	else {
		$('#box-5 .box').addClass('zero-width');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + $('#box-4').height()) {
		$('#box-5 .blue-box').removeClass('full-width');
	}
	else {
		$('#box-5 .blue-box').addClass('full-width');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + $('#box-4').height()) {
		$('#box-5 .blue-box .text').addClass('text-effect');
	}
	else {
		$('#box-5 .blue-box .text').removeClass('text-effect');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height()) {
		$('#bar-2').addClass('slide');
	}
	else {
		$('#bar-2').removeClass('slide');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height()) {
		$('#bar-3').addClass('slide');
	}
	else {
		$('#bar-3').removeClass('slide');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.color').addClass('display');
	}
	else {
		$('.color').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.left.top img').addClass('display');
	}
	else {
		$('.pool-box.left.top img').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.right.top img').addClass('display');
	}
	else {
		$('.pool-box.right.top img').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.left.top .title').addClass('display');
	}
	else {
		$('.pool-box.left.top .title').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.right.top .title').addClass('display');
	}
	else {
		$('.pool-box.right.top .title').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.bottom.left img').addClass('display');
	}
	else {
		$('.pool-box.bottom.left img').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.bottom.right img').addClass('display');
	}
	else {
		$('.pool-box.bottom.right img').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.bottom.left .title').addClass('display');
	}
	else {
		$('.pool-box.bottom.left .title').removeClass('display');
	}

	if ($(window).scrollTop() > $('#home').height() + $('#box-1').height() + $('#box-2').height() + $('#box-3').height() + 400) {
		$('.pool-box.bottom.right .title').addClass('display');
	}
	else {
		$('.pool-box.bottom.right .title').removeClass('display');
	}

	if ($(window).scrollTop() > parseInt($('#home').css('height')) + 30) {
		$('.blue-navy-banner').addClass('fixed-menu');
	}
	else {
		$('.blue-navy-banner').removeClass('fixed-menu');
	}
});