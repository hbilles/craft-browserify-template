// ----------------------------------------------------------------
// Nav toggle
var topNav    = document.querySelector('.top-nav'),
	navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', function(e) {
	topNav.classList.toggle('top-nav--active');
});
