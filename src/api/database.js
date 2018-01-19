const mongoose = require('mongoose')
mongoose.Promise = global.Promise

exports.connect = async (db = 'index') => {
	try {
		await mongoose.connect(`mongodb://localhost/${db}`, {
			useMongoClient: true
		})
		mongoose.connection.once('open', () => {
			console.log(`Connection to [${db}] has been made. Hazaah!`)
		}).on('error', (error) => {
			console.error('Connection error', error)
		})
	} catch (error) {
		console.error('Error:', `Connection to database failed`)
	}
}

exports.disconnect = async () => {
	try {
		await mongoose.disconnect()
	} catch (error) {
		console.error('Error:', `Disconnection to database failed`)
	}
}
