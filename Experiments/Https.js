// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Hello, Welcome to Node.js!");
//   res.end();
// });
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);

  res.end("Request Received");
});

server.listen(3000);
