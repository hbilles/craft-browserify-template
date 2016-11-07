import 'jquery';
import 'imagesloaded';
import 'owl.carousel';
import mq from './media-queries';


if ( $(window).width() >= mq.px.medium ) {

	var $galleries = $('.gallery');

	$galleries.each(function() {
		var $gallery  = $(this),
			$caption  = $gallery.parent().find('.caption'),
			showItems = $gallery.data('showitems') || 1,
			options   = {
				margin:       16,
				//stagePadding: 64,
				loop:         true,
				nav:          true
			};

		options['items'] = showItems;

		$gallery.owlCarousel(options);
		$gallery.find('.owl-stage-outer').after($caption);
	});

	var labelPrev = '<span class="visuallyhidden">prev</span>',
		labelNext = '<span class="visuallyhidden">next</span>';

	$('.owl-prev').html(labelPrev);
	$('.owl-next').html(labelNext);

}
