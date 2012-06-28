/**
 * socket.io server node.js
 */
var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket) {
    // sekicoco event from client
    socket.on('sekicoco', function (param) {
        // broadcast data from server to client
        socket.broadcast.emit('sekicoco', param);
    });

});
