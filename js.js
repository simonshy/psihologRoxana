$(document).ready(function(){
	$(".menclose, .despre, .cont, .serv").click(function(){
		$(".menclose").toggleClass("deschide");
    $(".meniu").toggleClass("inchide");
	});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("intro"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path:"introbut.json"
});

let iconSkipForward = document.querySelector('.bodymovinanim');

let animationSkipForward = bodymovin.loadAnimation({
        container: iconSkipForward,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "flybut.json"
});

  iconSkipForward.addEventListener('click', function() {
  animationSkipForward.playSegments([0,60], true);
});