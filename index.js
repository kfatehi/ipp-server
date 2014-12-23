var express = require('express')

var app = express()

app.use(function(req, res, next) {
	console.log(req.url)
	next()
})

app.get('/', function(req, res, next) {
	res.status(200).end('hi')
})

app.post('/', function(req,res,next) {
	console.log(req.headers)
	console.log(req.body)
	if (req.headers.expect === '100-continue') {
		console.log('continue')
		res.status(100).end('continue')
	}
})

app.listen(631)

console.log('listening on 631')
