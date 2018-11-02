	window.onload = animate;
	function animate(){
	$(".load").animate({left: "0%"}, 2500, 'easeOutExpo');
	$(".load").animate({top: "0%"}, 500, 'easeInCubic');
	var year = new Date();
var dateyear = year.getFullYear();
document.getElementById("copyrightyear").innerHTML = dateyear;
document.getElementById("copyrightyearmobile").innerHTML = dateyear;
	}
$(function() {
  $(".title, .triangle, .trianglegen, #trianglegen, .forminput, .trianglediv, .buttons, .background, .titlemobile, .triangledivmobile, .trianglegenmobile, .buttonsmobile, .forminputmobile, .backgroundfill").delay(3500).fadeIn();
});
$(function() {
  $(".body").delay(3500).animate({background: "#FF8C00"});
});
