

$(document).mousemove(function(event){
  $('.mouse-container').append('<div class="mouse-print" style="top:' + event.pageY + 'px; left:' + event.pageX + 'px;"></div>');

});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
alert("ei");
}

var touchX,touchY;

   function sketchpad_touchStart() {
       getTouchPos();
       drawDot(ctx,touchX,touchY,12);

       // Prevents an additional mousedown event being triggered
       event.preventDefault();
   }

   function sketchpad_touchMove(e) {
       // Update the touch co-ordinates
       getTouchPos(e);

       // During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
       drawDot(ctx,touchX,touchY,12);

       // Prevent a scrolling action as a result of this touchmove triggering.
       event.preventDefault();
   }

   // Get the touch position relative to the top-left of the canvas
   // When we get the raw values of pageX and pageY below, they take into account the scrolling on the page
   // but not the position relative to our target div. We'll adjust them using "target.offsetLeft" and
   // "target.offsetTop" to get the correct values in relation to the top left of the canvas.
   function getTouchPos(e) {
       if (!e)
           var e = event;

       if (e.touches) {
           if (e.touches.length == 1) { // Only deal with one finger
               var touch = e.touches[0]; // Get the information for finger #1
               touchX=touch.pageX-touch.target.offsetLeft;
               touchY=touch.pageY-touch.target.offsetTop;
           }
       }
   }
