var http = require("http");
var randomText = require("./randomText"); //use this to call function in random text

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-type": "text/html"});
	response.write("<h2>Who said it?</h2> <p>" + randomText() + "</p>");
	response.end();
}).listen(8888);