//Lets require/import the HTTP module

(function () {
	var http = require('http'),
		fs = require('fs'),
		path = require('path'), 
		host = '127.0.0.1',
		port = '3000';

	var mimes = {
		"htm" : "text/html",
		"html" : "text/html",
		".css" : "text/css",
		".js" : "text/javascript",
		".gif" : "image/gif",
		".jpg" : "image/jpeg",
		".png" : "image/png"
	}

	var server = http.createServer(function(req, res){
		var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
		var ContentType = mimes[path.extname(filepath)];

		fs.exists(filepath, function (file_exists) {
			if (file_exists) {
				res.writeHead(200, {'Content-Type' : ContentType});
				var streamFile = fs.createReadStream(filepath).pipe(res);

				streamFile.on('error', function () {
					res.writeHead(500);
					res.end();
				})
			} else {
				res.writeHead(404);
				res.end("Sorry we could not find the file you requested.");
			}
		})
	}).listen(port, host, function(){
		console.log('Server running on http://' + host + ':' + port);
	});
})();
