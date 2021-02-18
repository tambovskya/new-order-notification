const http = require("http");

const port = Number(process.env.PORT || 8080);

var server = http.createServer(function(request, response) {
	if (request.method == "POST") {
		console.log("A post request has been seen.");
	} else {
		console.log( "Sever accessed without a post request." );
	}
});

server.listen(port, function() {
	console.log("Listening on port: " + port);
});