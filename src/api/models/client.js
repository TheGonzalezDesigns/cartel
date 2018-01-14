const mongoose = require('mongoose')
const Schema = mongoose.Schema
const item = require('../models/item')

const schema = new Schema({
	id: Number,
	frequent: item.schema,
	history: [item.schema]
}, {
	usePushEach: true
})

exports.Model = mongoose.model('client', schema)
