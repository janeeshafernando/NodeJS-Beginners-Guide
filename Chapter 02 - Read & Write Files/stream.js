// Read & Write using Large Files containing lot of text.

// Import File System
const fs = require('fs');
// Import Path
const path = require('path');

// Read from file
const rs = fs.createReadStream(path.join(__dirname,'files','lorem.txt'),{encoding:'utf-8'});
// Write to a new file
const ws = fs.createWriteStream(path.join(__dirname,'files','newLorem.txt'));

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);





