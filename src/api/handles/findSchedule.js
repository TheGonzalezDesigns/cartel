const {
	wrapper
} = require('./re/wrapper')
exports.handle = wrapper(async (meta) => {
	let res = await meta.model.find({}, (err, docs) => {
		return docs || err
	})
	console.log('Response @ findSchedule.js', res)
	return res
})

exports.schema = {
	'route': 'findSchedule',
	'type': 'schedule',
	'data': {},
	'!metaOnly': true
}
