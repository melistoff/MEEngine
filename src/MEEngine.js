'use strict';

export function MEEngine(width, height, context) {
	var canvas = document.createElement("canvas")
	
	canvas.setAttribute('width', width)
	canvas.setAttribute('height', height)
	canvas.setAttribute('id', 'meengine-canvas')

	document.body.appendChild(canvas)

	return canvas.getContext(context)
}
