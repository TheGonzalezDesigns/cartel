const {
	wrapper
} = require('./re/wrapper')
exports.handle = wrapper((meta) => {
	let _res = 'Nothing!'
	meta.model.find(meta.query)
		.then((res) => {
			if (res) {
				console.log(res)
				_res = res
			}
		})
		.catch((err) => {
			if (err) console.error('Error:', err)
		})
	return _res
})

exports.schema = {
	'route': 'find',
	'type': 'item',
	'data': {
		'!meta': {
			'!query': {
				'!key': 'name'
			}
		}
	},
	'!metaOnly': true
}
