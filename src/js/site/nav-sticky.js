// ----------------------------------------------------------------
// Sticky site header

import 'jquery'
import debounce from 'lodash/debounce'


var lastScrollTop = 0,
	delta = 5,
	$topNav = $('.top-nav'),
	topNavHeight = $topNav.outerHeight();

// on scroll, run hasScrolled
$(window).on('scroll', debounce(function() {
	hasScrolled();
}, 15));

function hasScrolled(_showHide) {
	_showHide = typeof _showHide !== 'undefined' ? _showHide : false;

	var st = $(window).scrollTop();

	if (Math.abs(lastScrollTop - st) <= delta) {
		return;
	}

	if (!_showHide) {
		// Stick the nav to the viewport top
		// If scrolled past topNav...
		if (st > topNavHeight) {
			$topNav.addClass('top-nav--stick top-nav--down');
		} else {
			// If topNav is back near top of page...
			$topNav.removeClass('top-nav--stick top-nav--down');
		}
	}

	
	// hide nav when scrolling down and show when scrolling up
	if (_showHide) {
		// If current position > last position AND scrolled past topNav...
		if (st > lastScrollTop && st > topNavHeight) {
			//hide topNav
			$topNav.removeClass('top-nav--down').addClass('top-nav--stick');
		} else {
			//Scroll up
			// If did not scroll past the document (possible on mac)...
			if (st + $(window).height() < $(document).height()) {
				$topNav.addClass('top-nav--down').addClass('top-nav--stick');
			}
		}
	}

	lastScrollTop = st;
}
