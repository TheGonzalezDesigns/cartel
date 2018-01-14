const {
	wrapper
} = require('./wrapper')

exports.handle = wrapper((item) => {
	item.meta.model.findOneAndUpdate(item.meta.query, item.data)
})
