var http = require('http');
var handleRequest = function (request, response) {
  response.writeHead(200);
  
  response.end('Hello.This is Ajay Khatri and This app tested with Node Server App deployed on ECS Fargate with CodePipeline! Thanks');
  
};
var www = http.createServer(handleRequest);
www.listen(8080);
