var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen('8080');
//io.set('log level', 1);

function handler(req, res){
    fs.readFile('./1st//index.html', (err, data)=>{
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
}

io.sockets.on('connection', (socket)=>{
    socket.emit('news',{hello:'world'});
    socket.on('my other event', (data,fn)=>{
        console.log('已接收到客户端信息：'+data);
        fn('客户端知道服务器端已接收到信息')
    });
});