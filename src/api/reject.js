const {
	respond
} = require('./respond')

exports.reject = (req) => {
	console.error('Error:', 'request rejected after failling validation')
	console.warn('Recieved:', req)
	return respond(false)
}
