const {
	wrapper
} = require('./re/wrapper')

exports.handle = wrapper(async schedule => {
	console.log(`Updating ${schedule.data.date}...`)
	let callback = (err, res) => {
		let data = err || res
		console.log('Response @ callback:', data)
		return callback
	}
	const query = {
		date: schedule.data.date
	}
	const found = await schedule.meta.model.find(query, (err, docs) => docs || (false && err))
	console.log('Found:', found)
	if (found.length) {
		console.log('Updating...')
		const res = await schedule.meta.model.update(query, schedule.data, callback)
		return res
	} else {
		console.log('Saving...')
		const res = await schedule.meta.actual.save(callback)
		return res
	}
})

exports.schema = {
	'route': 'createSchedule',
	'type': 'schedule',
	'data': [
		{
			'data': {}
		}
	]
}
