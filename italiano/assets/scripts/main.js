function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  m = checkTime(m);

  document.getElementById('clock').innerHTML =
  "Milano, " + h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
  document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0; //
});


window.addEventListener("load", startTime2, true);

function startTime2() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  m = checkTime(m);

  document.getElementById('clock2').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime2, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
  document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0; //
});


startTime2();
