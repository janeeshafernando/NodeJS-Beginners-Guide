// How NodeJS differs from Vanilla JS

// 1) Node runs on a server - not in a browser (backend not frontend)

// 2) The console is the terminal window 
      console.log("Hello World");

//    Run a javascript file using node in the terminal 
//    > node filename

// 3) Global object instead of window object (global object is smaller than the window object)
      console.log(global);

// 4) Has common core modules that will explore 

// 5) CommonJS modules instead of ES6 modules    
      
       console.log("---- OS ----");
       // import statement 
       const os = require('os');
       console.log(os.type());        // Windows_NT
       console.log(os.version());    // Windows 11 Home Single Language
       console.log(os.homedir());   // C:\Users\Janisha Fernando
       console.log(__dirname);     // C:\Users\Janisha Fernando\OneDrive\Desktop\Cloud99X\Node.js\NodeJS Tutorial\Chapter 01 - Start Here
       console.log(__filename);   // C:\Users\Janisha Fernando\OneDrive\Desktop\Cloud99X\Node.js\NodeJS Tutorial\Chapter 01 - Start Here\server.js
       console.log("");

       console.log("---- PATH ----");
         // import statement 
       const path = require('path');
       console.log(path.dirname(__filename));     // C:\Users\Janisha Fernando\OneDrive\Desktop\Cloud99X\Node.js\NodeJS Tutorial\Chapter 01 - Start Here
       console.log(path.basename(__filename));   //  server.js
       console.log(path.extname(__filename));   //  .js
       console.log(path.parse(__filename));    
       {/* {
            root: 'C:\\',
            dir: 'C:\\Users\\Janisha Fernando\\OneDrive\\Desktop\\Cloud99X\\Node.js\\NodeJS Tutorial\\Chapter 01 - Start Here',
            base: 'server.js',
            ext: '.js',
            name: 'server'
            }
      */}
      console.log("");

      console.log("--- Math ---")
       // import statement 
      //const math =  require('./math');
      //console.log(math.add(2,3));

     // import statement 
      const {add, subtract, multiply, divide} = require('./math')
      console.log(add(10,5));
      console.log(subtract(4,2));
      console.log(multiply(3,10));
      console.log(divide(50,25));

// 6) Missing some JS APIs (fetch)

      

    
