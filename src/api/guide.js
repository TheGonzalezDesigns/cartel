const {
	handles
} = require('./handles')
exports.guide = (req) => {
	const data = req.body.data
	const route = req.body.route
	const type = req.body.type
	const handle = handles[route]
	if (typeof handle === 'function') {
		return handle(data, type)
	} else {
		console.error('Error:', `The route [${route}] doesn't exist`)
		return [false]
	}
}
