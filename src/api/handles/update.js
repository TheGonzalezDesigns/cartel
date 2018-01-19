const {
	wrapper
} = require('./re/wrapper')

exports.handle = wrapper(async item => {
	console.log(`Updating ${item.data.name}...`)
	let callback = (err, res) => {
		let data = err || res
		console.log('Response @ callback:', data)
		return callback
	}
	let res
	const id = item.data['_id']
	if (id && id !== '') {
		const query = {
			'_id': id
		}
		res = item.data.delete ? await item.meta.model.findOneAndRemove(query, callback) : item.data.modified ? await item.meta.model.findOneAndUpdate(query, item.data, callback, {
			new: true
		}) : `No action taken for ${item.data.name}:${id}`
	} else {
		res = await item.meta.actual.save(callback)
	}
	return res
})

exports.schema = {
	'route': 'update',
	'type': 'item',
	'data': [
		{
			'data': {}
		}
	]
}
