const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const server = express()

server.use(morgan('combined'))
server.use(bodyParser.json())
server.set('trust proxy', true)
server.set('trust proxy', 'loopback')

server.get('/get', (req, res) => {
	res.send(handle.get(req.body.query))
})

server.post('/post', (req, res) => {
	res.send(handle.post({
		"data": req.body.data
	}))
})

server.listen(3000)
