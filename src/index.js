const express = require('express')
const morgan = require('morgan')
const server = express()
const cors = require('cors')
const {
	guide
} = require('./api/guide')
const database = require('./api/database')
server.use(cors)
server.use(morgan('combined'))
server.use(express.json({
	strict: false
}))
server.set('trust proxy', true)
server.set('trust proxy', 'loopback')

server.get('/', (req, res) => res.send('Connection achieved!'))

server.post('/', (req, res) => {
	const data = guide(req)
	res.send(data)
})

try {
	server.listen(8888, () => {
		//database.connect()
		console.log('Listening on ', 8888)
	})
} catch (error) {
	console.error('Error:', error)
}
