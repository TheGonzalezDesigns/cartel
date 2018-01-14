const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
	name: String,
	category: String,
	price: Number,
	photo: String,
	description: String
}, {
	usePushEach: true
})

exports.Model = mongoose.model('item', schema)
exports.schema = schema
