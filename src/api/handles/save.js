const {
	wrapper
} = require('./re/wrapper')

exports.handle = wrapper((item) => {
	item.meta.actual.save()
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
