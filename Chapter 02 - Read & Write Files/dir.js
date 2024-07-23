const fs = require('fs');

// Create a new folder
if (!fs.existsSync('./test')){
    fs.mkdir('./test', (err) => {
        if(err) throw err;
        console.log('Directory created');
    });
}

// Delete a folder 
if(fs.existsSync('./test')){
    fs.rmdir('./test', (err) => {
        if(err) throw err;
        console.log('Directory removed');
    });
}


//exit on uncaught error 
process.on('uncaughtException', err => {
    console.error(`This was an uncaught error: ${err}`);
    process.exit(1);
})
