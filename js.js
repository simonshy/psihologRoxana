$(document).ready(function(){
	$(".menclose").click(function(){
		$(".menclose").toggleClass("deschide");
    $(".meniu").toggleClass("inchide");
	});
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path:"introbut.json"
});