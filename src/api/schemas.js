const {
	routes
} = require('./routes')

let schemas = {}
routes.forEach((route) => {
	let {
		schema
	} = require(`./handles/${route}`)
	schemas[route] = schema
})

exports.schemas = schemas
exports.schema = ['route', 'type', 'data']
