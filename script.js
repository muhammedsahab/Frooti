var elem = document.querySelector("#animation");
window.addEventListener('scroll', function() {
	var value = window.scrollY * 0.35;
	elem.style.transform = `translatex(-50%) translatey(-50%) rotate(${value}deg)`; 
});