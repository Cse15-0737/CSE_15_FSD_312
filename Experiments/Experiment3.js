// Write a program to create a simple HTTP server using the http.server module.
// The server should listen on port 8000 and display "Hello World" when a client sends a GET request.
// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.method !== "GET") {
//         res.writeHead(405, { "Allow": "GET", "Content-Type": "text/plain; charset=utf-8" });
//         res.end("Method Not Allowed");
//         return;
//     }

//     if (req.url !== "/" && req.url !== "/index.html") {
//         res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
//         res.end("Not Found");
//         return;
//     }

//     res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//     res.end("Hello World");
// });

// server.on("error", (error) => {
//     console.error("Server error:", error.message);
//     process.exit(1);
// });

// server.listen(8000, () => {
//     console.log(`Server is running on port 8000`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welcome Home");
    res.end();
  } else if (req.url == "/about") {
    res.write("About Page");
    res.end();
  } else {
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(8000);

console.log("Server started on port 8000");