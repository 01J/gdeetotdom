$(function(){
$(window).scroll(function() {
	var top = $(document).scrollTop();
	if($(window).width() >= '1100'){
if (top < 26) {
	$(".header-main").css({top: '0', position: 'relative'});
} else {
	$(".header-main").css({top: '0', position: 'fixed'});
};
};
});
});