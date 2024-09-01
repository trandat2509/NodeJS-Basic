const { createServer } = require("node:http");

const hostname = "localhost"; // local host - IP server
const port = 3003;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n Tran Hau Nguyen Dat");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
