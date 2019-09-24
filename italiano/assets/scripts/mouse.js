if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  $(document).mousemove(function(event){
    $('.mouse-container').append('<div class="mouse-print" style="top:' + event.pageY + 'px; left:' + event.pageX + 'px;"></div>');
  });
}

if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
$(".mouse-container").addClass("mousenone");
}
