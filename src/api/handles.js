const routes = [
	// '_delete',
	'find',
	// 'nesting',
	'save',
	'update'
]
let handles = {}
routes.forEach((route) => {
	let {
		handle
	} = require(`./handles/${route}`)
	handles[route] = handle
})

exports.handles = handles
