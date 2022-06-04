var http = require('http');
var server = http.createServer(function(req, res) {
    res.end(Object.keys(io.sockets.connected).length + ' users online');
});
server.listen(process.env.PORT || 3000);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(socket.id, 'connected');
});
