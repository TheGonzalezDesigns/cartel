const {
	wrapper
} = require('./re/wrapper')
const {
	query
} = require('./re/query')

exports.handle = wrapper((item) => {
	item.meta.model.findOneAndUpdate(query(item), item.data)
})
