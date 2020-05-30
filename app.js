var express = require('express')
var socket = require('socket.io')

// App setup
var app = new express()

var server = app.listen(4000, () => {
    console.log('listening to reuests at port 4000')
})

// Static files
app.use(express.static('public'))

// Socket.io
var io = socket(server)

io.on('connection', socket => {
    console.log('made socket connection: ', socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })
})