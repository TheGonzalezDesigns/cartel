const {
	respond
} = require('../../respond')
exports.wrapper = (actionOn) => {
	const unwrapped = async (data, type) => {
		let responses = []
		let _Model
		try {
			const {
				Model
			} = require(`../../models/${type}`)
			_Model = Model
		} catch (error) {
			console.error(`Error: The model [${type}] doesn't exist`)
			responses.push(respond(false))
			return responses
		}
		console.log('\nData:', data)
		console.log('\n')
		if (data['metaOnly']) {
			let meta = data.meta
			meta['model'] = _Model
			try {
				const result = await actionOn(meta)
				console.log('Response', result)
				responses.push(result)
			} catch (error) {
				console.error(error)
				responses.push(respond(false))
			}
		} else {
			if (data) {
				data.forEach(async (item) => {
					item.meta['actual'] = new _Model(item.data)
					item.meta['model'] = _Model
					try {
						const result = await actionOn(item)
						responses.push(result)
					} catch (error) {
						console.error(error)
						responses.push(respond(false))
					}
				})
			} else {
				console.error('Error:', 'data is invalid')
				console.log('Data:\n', data)
				responses.push(respond(false))
			}
		}
		return responses
	}
	return unwrapped
}
