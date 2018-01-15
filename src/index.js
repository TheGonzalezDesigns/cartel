const database = require('./api/database')
const dynamix = require('./dynamix')
const express = require('express')
const morgan = require('morgan')
const server = express()
const cors = require('cors')
const {
	guide
} = require('./api/guide')

server.use(morgan('combined'))
server.use(express.json({
	strict: false
}))
server.set('trust proxy', 'loopback')
server.set('trust proxy', true)
server.use(cors())

server.get('/', (req, res) => res.send('Connection achieved, bish!'))

server.post('/', (req, res) => {
	const data = guide(req)
	res.send(data)
})

const init = () => {
	console.warn(`Listening on ${dynamix.port}`)
	database.connect()
}

server.listen(dynamix.port, init)
