// Using Node.js's built in events module, create an EventEmitter.  Register Multiple listeners for a response
// event, then emit the event by passing name and id as arguments and display them in the console.
const http = require("http");
const EventEmitter = require("events");
 
const myEmitter = new EventEmitter();

myEmitter.on("response", () => {
    console.log("data received");
});

myEmitter.on("response", () => {
    console.log("some other logic here");
});

myEmitter.on("response", (name, id) => {
    console.log(`Name: ${name}, ID: ${id}`);
});

myEmitter.emit("response", "aaryan", 2);

// Using Node.js's built in events module, create an HTTP server that runs on port 3000 and returns a
// JSON response for every request containing id: 1 and name: "Laptop"

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json"

   });
  res.end(JSON.stringify({ id: 1, 
    name: "Laptop" }));
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});