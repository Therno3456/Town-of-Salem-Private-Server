const net = require('net');
const MessageManager = require('./MessageManager.js');
const ClientList = require('./ClientList.js');
const port = 3600;

var tempMessage = 0;

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        data = data.toString();
        data = handleMessage(data);
        for(var x=0;x<data.length;x++) {
            if(data[x].charCodeAt(0) == '2') {
                login(data[x], socket);
            }
            else {
                let message = MessageManager.parse(data[x].charCodeAt(0));
                if(typeof message == 'function') {
                    message = message(socket, data[x]);
                }
            }
            console.log(`[${data[x].charCodeAt(0)}] ${data[x]}`);
            let str = '';
            for(var x=0;x<data.length;x++) {
                str += data[x].charCodeAt(x) + ' ';
            }
            console.log(str);
        }
    });
});

server.listen(port, '127.0.0.1');
console.log("Listening in port: " + port);

function handleMessage(serverMessage) {
	let messageArray = [];
	let message = '';
	for(var x=0;x<serverMessage.length;x++) {
		message += serverMessage[x];
		if(serverMessage[x] == String.fromCharCode(0)) {
			if(tempMessage != '') {
				messageArray.push(tempMessage + message);
				tempMessage = '';
			}
			else {
				messageArray.push(message);
			}
			message = '';
		}
	}
	if(message.length != 0)
		tempMessage += message;
	return messageArray;
}

function login(data, socket) {
    let username = data.substring(10, data.indexOf('', 11));
    ClientList.addClient(socket, username);
	
	socket.write(String.fromCharCode(1) + String.fromCharCode(2) + String.fromCharCode(0), 'binary'); //success login code
	socket.write(String.fromCharCode(218) + 'Ú' + String.fromCharCode(0)); //game modes
	socket.write('J14*15*0*24*0' + String.fromCharCode(0), 'binary'); //???
	socket.write('%33' + String.fromCharCode(0), 'binary'); //options?
	socket.write('.0,0,0,-2,0,0,-2,-2,-2,' + String.fromCharCode(0), 'binary'); //???
	socket.write('X11*32' + String.fromCharCode(0), 'binary'); //???
	socket.write('Ã' + String.fromCharCode(0), 'binary'); //???
	socket.write('31550053' + String.fromCharCode(0), 'binary'); //???
	socket.write('40,2,7,15,55,59,91,126,129,132,133,137,145,151,160,179,201,202,215,222' + String.fromCharCode(0), 'binary'); //???
	socket.write('+0,1,2,3,4,5,64' + String.fromCharCode(0), 'binary'); //???
	socket.write(',0,1,2,3,4' + String.fromCharCode(0), 'binary'); //???
	socket.write('-0,1,2' + String.fromCharCode(0), 'binary'); //???
	socket.write('' + username + ',1281354,,1' + String.fromCharCode(0), 'binary'); //friends list
	socket.write('50' + String.fromCharCode(0), 'binary'); //???
	socket.write('60' + String.fromCharCode(0), 'binary'); //???
    socket.write('V1' + String.fromCharCode(0), 'binary'); //???
    socket.write(String.fromCharCode(28) + username + '*lots*lotss' + String.fromCharCode(0));
    socket.write(String.fromCharCode(28) + username + '*lots*lotss' + String.fromCharCode(0));
}