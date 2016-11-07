// adds 'no-touch' class to document for non-touch enabled devices

if (!('ontouchstart' in document.documentElement)) {
	//document.documentElement.className += 'no-touch'
	document.querySelector('body').classList.add('no-touch')
}