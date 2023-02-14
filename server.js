var app =  require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => res.send('Hello GeovaunieGolding Server!'));

io.on('connection', (socket) => {
    console.log('A User os Connected');
});

http.listen(3000,() => {
    console.log('Listening on *:3000')
});