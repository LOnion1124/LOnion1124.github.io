// 回到顶部按钮逻辑：默认隐藏，用户上划时出现，下滑时隐藏
(function($) {
	var scrollElem = $('#totop');
	var scrollSpeed = 150;
	var lastScrollTop = $(window).scrollTop();
	var minShowScroll = 100; // 滚动超过多少像素后才允许显示按钮

	scrollElem.hide();

	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop < minShowScroll) {
			scrollElem.stop().fadeTo(200, 0); // 顶部区域始终隐藏
		} else if (scrollTop < lastScrollTop) {
			// 上划，显示按钮
			scrollElem.stop().fadeTo(200, 1);
		} else if (scrollTop > lastScrollTop) {
			// 下滑，隐藏按钮
			scrollElem.stop().fadeTo(200, 0);
		}
		lastScrollTop = scrollTop;
	});

	scrollElem.click(function() {
		$('html, body').animate({scrollTop:0}, scrollSpeed);
		return false;
	});
})(jQuery);