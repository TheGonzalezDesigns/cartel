const {
	handles
} = require('./handles')

const {
	respond
} = require('./respond')

exports.guide = async (req) => {
	const route = req.route
	const type = req.type
	const handle = handles[route]
	let data = req.data
	data['metaOnly'] = req['metaOnly'] && true
	if (typeof handle === 'function') {
		data = await handle(data, type)
		console.log('Response @ guide.js', data)
		return data
	} else {
		console.error('Error:', `The route [${route}] doesn't exist`)
		return respond()
	}
}
