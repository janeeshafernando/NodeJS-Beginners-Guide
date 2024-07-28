// import date-fs package 
const { format } = require('date-fns');
// import uuid package 
const { v4: uuid } = require('uuid')
// import fs core module
const fs = require('fs');
// import fs using promises
const fsPromises = require('fs').promises;
// import path core module
const path = require('path');

// Log Events Function 
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    // Output the Log Date & Time , User ID, Message
    console.log(logItem);

    try{
      // if logs directory does not exists it will create a logs directory and then append file to store the log details
      if(!fs.existsSync(path.join(__dirname, 'logs'))){
        await fsPromises.mkdir(path.join(__dirname, 'logs'));
      }
       // path.join(directory,folder_name,file_name)
      await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    }catch(err){
       console.log(err);
    }
}

module.exports = logEvents;

