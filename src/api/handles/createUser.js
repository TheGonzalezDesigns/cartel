const {
	wrapper
} = require('./re/wrapper')

exports.handle = wrapper(async user => {
	console.log(`Updating ${user.data.username}...`)
	let callback = (err, res) => {
		let data = err || res
		console.log('Response @ callback:', data)
		return callback
	}

	const googleId = user.data.googleId
	const query = {
		googleId: googleId
	}
	let res = await user.meta.model.findOne(query)
	if (res) console.warn(`${user.data.username} already exists`)
	else res = await user.meta.actual.save(callback)
	return res
})

exports.schema = {
	'route': 'createUser',
	'type': 'user',
	'data': [
		{
			'data': {}
		}
	]
}
