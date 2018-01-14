const {
	wrapper
} = require('./re/wrapper')
const {
	query
} = require('./re/query')
exports.handle = wrapper((item, callback) => {
	item.meta.model.find(query(item), callback)
})
