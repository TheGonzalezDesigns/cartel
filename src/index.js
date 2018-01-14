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

server.post('/', (req, res) => {
	const data = guide(req)
	res.send(data)
})

server.listen(3000, database.connect)
