exports.query = (item) => {
	let meta = item.meta
	let query = meta.query
	query['value'] = item.data[query.key]
	query['actual'] = {
		[query.key]: query.value
	}
	return query.actual
}
