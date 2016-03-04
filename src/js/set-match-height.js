var $            = require('jquery'),
	debounce     = require('lodash/debounce.js'),
	imagesLoaded = require('imagesLoaded'),
	matchHeight  = require('matchHeight');


// Set select items to equal heights
var $featuredNewsItems = $('.featured-news__item');

if ($featuredNewsItems.length) {
	imagesLoaded($featuredNewsItems, function() {
		setMatchHeight();
	});

	$(window).on('resize', debounce(setMatchHeight, 300));
}

function setMatchHeight() {
	$featuredNewsItems.matchHeight();
}
