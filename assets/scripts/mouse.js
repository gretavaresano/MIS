

$(document).mousemove(function(event){
  $('.mouse-container').append('<div class="mouse-print" style="top:' + event.pageY + 'px; left:' + event.pageX + 'px;"></div>');

});
