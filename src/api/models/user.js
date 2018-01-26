const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
	username: String,
	googleId: String
}, {
	usePushEach: true
})

exports.Model = mongoose.model('user', schema)
exports.schema = schema
