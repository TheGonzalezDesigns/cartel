const mongoose = require('mongoose')
mongoose.Promise = global.Promise

exports.connect = (db = 'index') => {
	mongoose.connect(`mongodb://localhost/${db}`, {
		useMongoClient: true
	})
	mongoose.connection.once('open', function () {
		console.log(`Connection to [${db}] has been made. Hazaah!`)
	}).on('error', function (error) {
		console.error('Connection error', error)
	})
}
