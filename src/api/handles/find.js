const {
	wrapper
} = require('./re/wrapper')
const {
	query
} = require('./re/query')
exports.handle = wrapper((item, callback) => {
	meta.model.findOne(query(item), callback)
})
