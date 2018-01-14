const {
	wrapper
} = require('./wrapper')

exports.handle = wrapper((item) => {
	item.meta.actual.save()
})
