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

let iconfly = document.querySelector('.bodymovinanim');

let animationfly = bodymovin.loadAnimation({
        container: iconfly,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "flybut.json"
});

  iconfly.addEventListener('click', function() {
  animationfly.playSegments([0,60], true);
});