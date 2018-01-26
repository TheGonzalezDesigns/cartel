const {
	wrapper
} = require('./re/wrapper')
exports.handle = wrapper(async (meta) => {
	let res = await meta.model.find({}, (err, docs) => {
		return docs || err
	})
	console.log('Response @ find.js', res)
	return res
})

exports.schema = {
	'route': 'find',
	'type': 'user',
	'data': {},
	'!metaOnly': true
}
