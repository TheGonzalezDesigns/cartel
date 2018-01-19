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
		if (data['metaOnly']) {
			let meta = data.meta
			meta['model'] = _Model
			try {
				const res = await actionOn(meta)
				console.log('Response @ wrapper.js', res)
				return res
			} catch (error) {
				console.error(error)
				responses.push(respond(false))
			}
		} else {
			if (data) {
				data.forEach((item) => {
					console.log('Item:', item)
					const actual = new _Model(item.data)
					item['meta'] = {
						actual: actual
					}
					console.log('Actual:\t', actual)
					if (item.data.did !== '') item.meta.actual['_id'] = item.data['_id']
					item.meta['model'] = _Model
					try {
						const res = actionOn(item)
						responses.push(res)
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
