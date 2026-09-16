// Using Node.js's built in events module, create an EventEmitter.  Register Multiple listeners for a response
// event, then emit the event by passing name and id as arguments and display them in the console.
import http from "http";
import EventEmitter from "events";

const myEmitter = new EventEmitter();