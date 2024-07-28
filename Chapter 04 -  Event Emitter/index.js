// import our logEvents module 
const logEvents = require('./logEvents');

// import events core module 
const EventEmitter = require('events');

//Define a EventEmitter class
class MyEmitter extends EventEmitter {};

// Initialize object
const myEmitter = new MyEmitter();

// Add a listner for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // Emit event
    myEmitter.emit('log','Log event emitted!')
},2000);
