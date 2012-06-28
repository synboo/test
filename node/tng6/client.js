// include jQuery and socket.io.js

// initialize
var socket = io.connect('http://'+document.location.host+':8000');

// bind click event
$(document).on('click', '.seki', function () {
    // execute Ajax and receive JSON data

    // emit data
    socket.emit('sekicoco', param);
});

// bind sekicoco event
socket.on('sekicoco', function (json) {
    // manipulate the DOM
});
