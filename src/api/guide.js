const {
	handles
} = require('./handles')

const {
	respond
} = require('./respond')

exports.guide = (req) => {
	const route = req.route
	const type = req.type
	const handle = handles[route]
	let data = req.data
	data['metaOnly'] = req['metaOnly'] && true
	if (typeof handle === 'function') {
		return handle(data, type)
	} else {
		console.error('Error:', `The route [${route}] doesn't exist`)
		return respond()
	}
}
