// Node Documentation - https://nodejs.org/docs/latest-v20.x/api/fs.html#fsreadfilepath-options-callback

/*  --------------
    READ FILE
    --------------

   --- Syntax ---
   fs.readFile('path',[options],callback function)

   path - string, buffer, url, integer 
   options - encoding, flag, signal 
   callback - err, data

   --- Example ---
   fs.readFile('path','option', (parameter1, parameter2) => {
      callback function body
   })
*/

// Import fs File System
const fs = require('fs');

// Method 1
fs.readFile('./files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// Method 2
fs.readFile('./files/starter.txt','utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
})


/*
--- Error ---
fs.readFile('./files/hello.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
*/

// Use path module without hard coding the file path
const path = require('path');

// path.join(__dirname, folder_name, file_name)
fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

/*  --------------
    WRITE FILE
    --------------
    
   --- Syntax ---
   fs.writeFile('path','[text]',callback function)

   path - string, buffer, url, integer 
   text - string
   callback - err, data

   --- Example ---
   fs.writeFile('path', 'Write the message', (err) => {
      callback function body
   })
*/

fs.writeFile(path.join(__dirname,'files','reply.txt'),'I am learning node.js', (err) => {
    if(err) throw err;
    console.log("File: reply.txt - Write complete");
})

/*  --------------
    APPEND FILE
    --------------
    
   --- Syntax ---
   fs.appendFile('path','[text]',callback function)

   path - string, buffer, url, integer 
   text - string
   callback - err, data

   --- Example ---
   fs.appendFile('path', 'Write the message', (err) => {
      callback function body
   })
*/

// appendFile method can create a new file and add content to an exsisting file. 

// Method 1 - Creating a new file
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'These text were generated for testing purpose only.', (err) => {
    if (err) throw err;
    console.log("File: text.txt - Append complete");
})

// Method 2 - Appending content to an exsisting file
fs.appendFile(path.join(__dirname,'files','starter.txt'),'\nThese text were append to the file only for testing purpose.', (err) => {
    if (err) throw err;
    console.log("File: starter.txt - Append complete")
})

//Method 3 - Write & Append  File
fs.writeFile(path.join(__dirname, 'files', 'info.txt'), 'Hello, how are you?', (err) => {
    if (err) throw err;
    console.log("File: info.txt - Write complete")

    fs.appendFile(path.join(__dirname, 'files', 'info.txt'), '\nI am fine.Thank you!',(err) => {
        if(err) throw err;
        console.log("File: info.txt - Append complete")
    })
})

/*  --------------
    RENAME FILE
    --------------
    
   --- Syntax ---
   fs.rename('path','newPath', callback function)

   path - string, buffer, url, integer 
   callback - err, data

   --- Example ---
   fs.writeFile('path', 'newPath', (err) => {
      callback function body
   })
*/  

fs.rename(path.join(__dirname,'files','test.txt'), path.join(__dirname,'files','testDoc.txt'), (err) => {
    if(err) throw err;
    console.log("File: test.txt - Rename complete")
})


// Method 1 - Write , Append & Rename File 
fs.writeFile(path.join(__dirname, 'files', 'ai.txt'), 'AI stands for Artificial Intelligence', (err) => {
    if (err) throw err;
    console.log("File: ai.txt - Write complete")

    fs.appendFile(path.join(__dirname, 'files', 'ai.txt'), '\nMachine Learning is a core module of AI',(err) => {
        if(err) throw err;
        console.log("File: ai.txt - Append complete")

        //Rename file (ai.txt ---> tech.txt)
        fs.rename(path.join(__dirname, 'files', 'ai.txt'), path.join(__dirname, 'files', 'tech.txt'), (err) => {
            if(err) throw err;
            console.log("File: tech.txt - Rename complete")
        })
    })
})
  

/*  --------------
    DELETE FILE
    --------------
    
   --- Syntax ---
   fs.unlink('path', callback function)

   path - string, buffer, url, integer 
   callback - err

   --- Example ---
   fs.writeFile('path', (err) => {
      callback function body
   })
*/  

fs.unlink(path.join(__dirname,'files','main.txt'), (err) => {
    if(err) throw err;
    console.log("File: main.txt - File deleted");
})


// fsPromise File System
const fsPromises = require('fs').promises;

const fileOps = async () => {
    try{
        // Read the file and store the text in data variable 
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'final.txt'), 'utf-8');
        console.log('fsPromises: file - final.txt -> The file is been read.');
        
          // Printing the data in final.txt file 
        console.log(data);

        // Get the data from the final.txt file and write it in a new file called promiseWrite.txt
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        console.log('fsPromises: file - promiseWrite.txt -> Write complete');

        // Append new data to the promiseWrite.txt file
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'),'\nI am passionate in Full-Stack Development.');
        console.log('fsPromises: file - promiseWrite.txt -> Append complete');

        // Rename the promiseWrite.txt file to promiseComplete.txt 
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'),path.join(__dirname, 'files', 'promiseComplete.txt'));
        console.log('fsPromises: file - promiseWrite.txt -> Rename complete');

        // Read the new file promiseComplete.txt and store the text in newData.txt file 
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log('fsPromises: file - promiseComplete.txt -> The file is been read.');

        // Deleting the final.txt file 
        await fsPromises.unlink(path.join(__dirname, 'files', 'final.txt'), data);
        console.log('fsPromises: file - final.txt -> The file has been deleted.');

        // Printing the data im promiseComplete.txt file 
        console.log(newData);
    }
    catch(err){
       console.error(err)
    }
}

fileOps();


//exit on uncaught error 
process.on('uncaughtException', err => {
    console.error(`This was an uncaught error: ${err}`);
    process.exit(1);
})
