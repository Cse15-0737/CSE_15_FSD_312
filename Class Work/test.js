// function sum(){
//     console.log("2");
// }
// function example() {
//     console.log("1");
//     sum();
//     console.log("3");
// }

// example();

// function sum() {
//   setTimeout(() => {
//     console.log("2");
//   }, 2000);
// }
// function example() {
//   console.log("1");
//   sum();
//   console.log("3");
// }
// example();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("found data");
//   }, 2000);
// });
// promise.then((result) => {
//   console.log(result);
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("data not found, something went wrong");
//   }, 2000);
// });
// promise.then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });

//Write a Node.js program to create a basic HTTP server that handles different
// URL routes
// The serever should:
// Dispaly "Home Page" when the user visits /.
// Dispaly "About Page" when the user visits /about.
// Return 404 status code and display "Page not found" for anuy onvalid URl.
// provide a link to return to the home page on the 404 page
// Run the server on port 3000.

const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Home Page</h1>");
        res.end();
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>About Page</h1>");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>Page not found</h1>");
        res.write('<a href="/">Return to Home Page</a>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 