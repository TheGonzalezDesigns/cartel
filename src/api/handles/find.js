const {
	wrapper
} = require('./wrapper')

exports.handle = wrapper((item, callback) => {
	item.meta.model.findOne(item.meta.query, callback)
})
