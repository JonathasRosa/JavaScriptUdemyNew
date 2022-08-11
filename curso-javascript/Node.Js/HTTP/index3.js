const { createServer } = require("http");
 
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello Word!</h1>
    <p>Primeira página WEB com Node.JS!!!</p>
    `);
    response.end();
 });
 server.listen(8000);
 console.log("Listening port 8000");