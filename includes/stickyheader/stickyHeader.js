function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#stickyDiv').addClass('stick');
		$('#headerPhoto').addClass('margintop');
		
    } else {
        $('#stickyDiv').removeClass('stick');
		$('#headerPhoto').removeClass('margintop');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});