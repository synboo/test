var io = require('socket.io').listen(8080);

io.sockets.on('connection', function (socket) {
    console.log('server connected!!');

    // sendMessage event from client
    socket.on('sendMessage', function (data) {
        // emit data from server to client
        socket.emit('a', data);
        // broadcast data from server to client
        socket.broadcast.emit('b', data);
    });

    // disconnect event
    socket.on('disconnect', function () {
        console.log('disconnect');
    });
});
