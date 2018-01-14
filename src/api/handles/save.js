const {
	wrapper
} = require('./re/wrapper')

exports.handle = wrapper((item) => {
	item.meta.actual.save()
})
