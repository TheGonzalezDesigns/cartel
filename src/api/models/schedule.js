const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
	date: String,
	opening: String,
	closing: String
}, {
	usePushEach: true
})

exports.Model = mongoose.model('schedule', schema)
exports.schema = schema
