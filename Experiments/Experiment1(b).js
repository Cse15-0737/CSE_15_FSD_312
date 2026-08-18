const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// Event Lstener
myEmitter.on("click", ()=>{
    console.log("Button clicked");
});

// Trigger Event
myEmitter.emit("click");