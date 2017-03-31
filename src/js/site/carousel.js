import Flickity from "../../../node_modules/flickity-imagesloaded/flickity-imagesloaded"
import mq from './media-queries'

const nodes = document.querySelectorAll('.carousel')

Array.prototype.map.call(nodes, node => {
	new Flickity(node, {
		cellAlign: 'left',
		wrapAround: true,
		imagesLoaded: true
	})
})
