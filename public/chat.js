// Make connection
var socket = io.connect('http://127.0.0.1:4000')

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');


// Emit events
btn.onclick = () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    })
    message.value = ''
}

socket.on('chat', data => {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})