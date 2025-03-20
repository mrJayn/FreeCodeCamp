// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// http://expressjs.com/en/starter/static-files.html
// http://expressjs.com/en/starter/basic-routing.html

var express = require('express')
var http = require('http')
var cors = require('cors')
var reload = require('reload')

var app = express()
app.use(cors({ optionsSuccessStatus: 200 }))
app.use(express.static('public'))
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

// <API>

app.get('/api/hello', (req, res) => {
	res.json({ greeting: 'hello API' })
})

// </API>

var server = http.createServer(app)

reload(app)
	.then(function (reloadReturned) {
		server.listen(3000, () => {
			console.log(`Express server loaded at: http://127.0.0.1:3000/`)
		})
	})
	.catch(function (err) {
		console.error('Reload error --', err)
	})

// var listener = app.listen(process.env.PORT, function () {
// 	console.log(`Your app started at: http://127.0.0.1:${listener.address().port}`)
// })
