if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  $(document).mousemove(function(event){
    $('.mouse-container').append('<div class="mouse-print" style="top:' + event.pageY + 'px; left:' + event.pageX + 'px;"></div>');
  });
}


window.addEventListener("touchmove", function(event) {
	var touch;
	if (event.targetTouches.length == 1) {
		touch = event.targetTouches[0];
  $('.mouse-container').append('<div class="mouse-print" style="top:' + event.pageY + 'px; left:' + event.pageX + 'px;"></div>');
	}
});
