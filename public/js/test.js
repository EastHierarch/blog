/**
 * Created by SUNMAOLIN on 2016/8/4.
 */
var http = require('http');
http.createServer(function(req,res){
    console.log("receive req");
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>helldddo</h1>');
    res.end('<p>Hello f</p>')
}).listen(3000);     //事件监听3000端口
console.log('open 2s ');

var http=require('http')
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>hello<h1>')
    res.end('<p>Hello</p>')
}).listen(2000);

