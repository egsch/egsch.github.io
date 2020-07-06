$(document).ready(function() {
  if ($(window).width() <= 700) {
    $(".nav-link").hide();
    $("#button").text("Menu");
  }
});
$("#button").click(function() {
  if ($(".nav-link").is(":visible")) {
    $(".nav-link").hide();
    $("#button").text("Menu");
  } else {
    $(".nav-link").show();
    $("#button").text("Close");
  };
});
$(".nav-link").click(function(){
  if ($(window).width() <= 700) {
  $(".nav-link").hide();
  $("#button").text("Menu");
  }
})
$( window ).resize(function() {
   if ($(window).width() > 700) {
    $(".nav-link").show();
  } else {
    $(".nav-link").hide();
}});
