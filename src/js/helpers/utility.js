export const delay = (() => {
	var timeout = 0
	
	return (callback, ms) => {
		clearTimeout(timeout)
		timeout = setTimeout(callback, ms)
	}
})()

export const findParent = {
	by(el, func) {
		if (!el || func === undefined || el === document) return undefined

		// if el matches according to function func, return el
		if (func(el)) return el

		return this.by(el.parentNode, func)
	},

	withClass(el, className) {
		return this.by(el, node => {
			return node.classList.contains(className)
		})
	},

	withData(el, attrName) {
		return this.by(el, node => {
			node.dataset.hasOwnProperty(attrName)
		})
	}
}
