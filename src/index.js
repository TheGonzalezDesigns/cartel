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

server.post('/', (req, res) => {
	req = req.body
	const data = validate(req) ? guide(req) : reject(req)
	res.send(data)
})

const init = () => {
	console.warn(`Listening on ${dynamix.port}`)
	database.connect()
}

server.listen(dynamix.port, init)
