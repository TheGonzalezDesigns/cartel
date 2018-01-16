const {
	wrapper
} = require('./re/wrapper')
const {
	query
} = require('./re/query')

exports.handle = wrapper((item) => {
	item.meta.model.findOneAndUpdate(query(item), item.data)
})

exports.schema = {
	'route': 'save',
	'type': 'item',
	'data': [
		{
			'actual': {},
			'!meta': {
				'!query': {
					'!key': 'name'
				}
			}
		}
	]
}
