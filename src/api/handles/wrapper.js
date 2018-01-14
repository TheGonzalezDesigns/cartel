const {
	respond
} = require('./respond')
exports.wrapper = (actionOn) => {
	const unwrapped = (data, type) => {
		let responses = []
		let _Model
		try {
			const {
				Model
			} = require(`../models/${type}`)
			_Model = Model
		} catch (error) {
			console.error(`Error: The model [${type}] doesn't exist`)
			responses.push(respond(false))
			return responses
		}
		let callback = (error, data) => {
			if (error) {
				console.error('Error:', error.errmsg)
				return respond(false)
			} else {
				console.log(data)
				return respond(true, data)
			}
		}
		data.forEach(async (item) => {
			item.meta['actual'] = new _Model(item.data)
			item.meta['model'] = _Model
			try {
				const result = await actionOn(item, callback)
				responses.push(result)
			} catch (error) {
				console.error(error)
				responses.push(respond(false))
			}
		})
		return responses
	}
	return unwrapped
}
