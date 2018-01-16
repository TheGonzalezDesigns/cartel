const {
	schemas,
	schema
} = require('./schemas')

Object.compare = function (obj1, obj2) {
	let _p
	let strict = false
	// Loop through properties in object 1
	for (let p in obj1) {
		strict = p.slice(0, 1) === '!'
		_p = strict ? p.slice(1) : p
		if (strict) console.log('\nStrict mode found!')
		// Check property exists on both objects
		console.log('\nChecking property exists on both objects...')
		if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(_p)) return false

		if (obj1[p] === null && obj2[_p] !== null) return false
		if (obj2[p] === null && obj1[_p] !== null) return false
		console.log('Passed')
		console.log('Now deeply comparing', _p)
		switch (typeof (obj1[p])) {
			// Deep compare objects
			case 'object':
				console.log('Entering sub-object...')
				if (!Object.compare(obj1[p], obj2[_p])) return false
				break
				// Compare function code
			case 'function':
				console.log('Evaluating function...')
				if (typeof (obj2[_p]) === 'undefined' || (p !== 'compare' && obj1[p].toString() !== obj2[_p].toString())) return false
				break
				// Compare values
			default:
				console.log('Comparing values...')
				console.log('Checking for empty values...')
				if (obj1[p] === '' && obj2[_p] !== '') return false
				if (obj2[p] === '' && obj1[_p] !== '') return false
				console.log('No empty values found')
				// Tests for equality if the key contains an '!' appended as
				if (strict) {
					console.log('Testing values for equality')
					if (obj1[p] !== obj2[_p]) return false
					console.log(`Values are equivalent: [${obj1[p]}, ${obj2[_p]}]`)
				} else console.log('Currently valid...')
		}
		console.log(`\n${_p} Passed\n`)
	}

	// Check object 2 for any extra properties
	if (strict) {
		console.log('Checking object 2 for any extra properties')
		for (let p in obj2) {
			console.log('Searching for', p)
			let variatA = obj1[('!' + p)]
			let variatB = obj1[p]
			let testA = typeof (variatA) === 'undefined'
			let testB = typeof (variatB) === 'undefined'

			if (testA && testB) return false
			console.log(`[${p}] found.`)
		}
	}
	console.log('Testing ended as a success')
	return true
}

exports.validate = (data) => {
	let validSchema = true
	let route = data.route
	console.log('Validating Basic Schema...\n')
	schema.forEach((attr) => {
		let validAttr = data.hasOwnProperty(attr)
		validSchema = validSchema && validAttr
		console.log(`The attribute [${attr}] is ${validAttr ? 'valid' : 'not valid'}`)
	})
	if (validSchema) {
		console.log('Validating Entire Schema...\n')
		const _schema = schemas[route]
		validSchema = Object.compare(_schema, data)
		console.log(`The schema is ${validSchema ? 'valid' : 'not valid'}`)
	} else console.error('Validation Error:', 'Basic scema failed')
	return validSchema
}
