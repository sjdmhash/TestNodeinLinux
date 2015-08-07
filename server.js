var('http') =require('http');
http.createServer(function(request, response) {
	response.writeHead({
		'Content-Type':'text/plain'
	});
	response.end('hello');
}).listen(80);
