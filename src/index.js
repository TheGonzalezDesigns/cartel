const database = require('./api/database')
const dynamix = require('./dynamix')
const express = require('express')
const morgan = require('morgan')
const server = express()
const cors = require('cors')
const {
	guide
} = require('./api/guide')
const {
	validate
} = require('./api/validate')
const {
	reject
} = require('./api/reject')

server.use(morgan('combined'))
server.use(express.json({
	strict: false
}))
server.set('trust proxy', 'loopback')
server.set('trust proxy', true)
server.use(cors())

server.get('/', (req, res) => res.send('Connection achieved, bish!'))

server.post('/', async (req, res) => {
	req = req.body
	console.log('Recieved:', req)
	const data = validate(req) ? await guide(req) : reject(req)
	console.log('Sending:', data)
	res.send(data)
})

const init = () => {
	console.warn(`Listening on ${dynamix.port}`)
	database.connect(dynamix.database)
}

server.listen(dynamix.port, init)
database.disconnect()
