// ----------------------------------------------------------------
// Scroll behavior

const $        = require('jquery')
const debounce = require('lodash/debounce')


var   lastScrollTop = 0
const delta = 5
const $masthead = $('#masthead')

// on scroll, run hasScrolled
$(window).on('scroll', debounce(() => {
	hasScrolled()
}, 250))

function hasScrolled() {
	var st = $(window).scrollTop()

	if (Math.abs(lastScrollTop - st) <= delta) {
		return
	}

	// If current position > last position AND scrolled past navbar...
	if (st > lastScrollTop && st > $masthead.outerHeight()) {
		//Scroll down
		$masthead.removeClass('masthead--down').addClass('masthead--up');
	} else {
		//Scroll up
		// If did not scroll past the document (possible on mac)...
		if (st + $(window).height() < $(document).height()) {
			$masthead.removeClass('masthead--up').addClass('masthead--down');
		}
	}

	lastScrollTop = st
}