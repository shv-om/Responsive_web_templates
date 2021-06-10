
let mainNav = document.getElementById('navigation-menu');
let navBarToggle = document.getElementById('js-navigation-toggle');

let navigation_logo = document.getElementById('navigation-logo');
let navigation = document.getElementById('navigation');


navBarToggle.addEventListener('click', function(){
  mainNav.classList.toggle('toggle-active');
  navigation.style.backgroundImage = "linear-gradient(260deg, rgb(0, 12, 36) 0%, rgb(28, 54, 111) 100%)";
});


// Shrink Navigation Menu on Scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
		navigation.style.padding = "10px 15px";
		navigation.style.backgroundImage = "linear-gradient(260deg, rgb(0, 12, 36) 0%, rgb(28, 54, 111) 100%)";
		navigation_logo.style.fontSize = "30px";
		navigation_logo.style.transition = "0.5s ease-in";

		navBarToggle.style.top = "20px";
		navBarToggle.style.transition = "0.5s";
	}
	else {
		navigation.style.padding = "30px 10px";
		navigation.style.backgroundImage = "none";
		navigation.style.backgroundColor = "transparent";
		navigation_logo.style.fontSize = "40px";
		navigation_logo.style.transition = "0.5s ease-in";

		navBarToggle.style.top = "45px";
		navBarToggle.style.transition = "0.5s";
	}
}

$('.dropdown').on('show.bs.dropdown', function () {
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function () {
	$(this).find('.dropdown-menu').hide();
});