const {
	routes
} = require('./routes')
let handles = {}
routes.forEach((route) => {
	let {
		handle
	} = require(`./handles/${route}`)
	handles[route] = handle
})

exports.handles = handles
