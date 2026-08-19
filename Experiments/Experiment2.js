//Perform CRUD operations using File System module.
const fs = require("fs");

//Create
fs.writeFileSync("File.txt", "Hi!, I'm Aaryan.");
console.log("File Created Successfully");

// Read
console.log(fs.readFileSync("File.txt", "utf-8"));

//update
fs.appendFileSync("File.txt", " I've updated the  file.");
console.log("File Updated Successfully");

// Read Updated Data
console.log(fs.readFileSync("File.txt", "utf-8"));

// Delete
fs.unlinkSync("File.txt");
console.log("File Deleted Successfully");