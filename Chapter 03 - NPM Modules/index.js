// Installing nodemon package (https://www.npmjs.com/package/nodemon)
/* Nodemon is a tool that helps develop Node.js based applications by automatically restarting 
   the node application when file changes in the directory are detected.*/

// Install nodemon package by typing the command
// > npm install nodemon -g (-g flag stands for global dependency)

// To run nodemon 
// > cd Chapter 03 - NPM Modules 
// > nodemon

console.log('Hello World!')

// Initialize npm for our project
// > npm init 
// After answering all the questions it created the package.json file
// package.json file includes all the package details need to be installed by npm

// After we start to install npm packages node_modules folder and package-lock.json file was created.


// Installing date-fns package (https://www.npmjs.com/package/date-fns)
// date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.
// > npm i date-fns

const { format } = require('date-fns');
console.log(format(new Date(), 'yyyy.MM.dd\tHH:mm:ss'));

console.log("Hello");

// Installing uuid package (https://www.npmjs.com/package/uuid)
// uuid creates user ids
// > npm i uuid 

const { v4: uuid } = require('uuid');
// const uuid = require('uuid');

console.log(uuid());
// console.log(uuid.v4());


// --- Dependencies Version ---

//"date-fns": "3.6.0",  
// 3 - major version / 6 - minor version / 0 - patch 
// This should be the exact version

//"uuid": "^10.0.0"
// ^10.0.0
// i)  go ahead an update the minor version or the patch.
// ii) but do not update the major version.

//"date-fns": "~3.6.0",  
// i)  go ahead an update the patch.
// ii) but do not update the major version or the minor version.

//"date-fns": "*",  
// i) Update the major,minor and the patch version 

// --- Installing NPM Packages ---
//If you want to install a npm package with a specific version
// > npm i package_name@version
// example: > npm i uuid@8.3.2


// --- Updating NPM Packages --- 
// If you want to update any npm packages installed in the project
// > npm update 


// --- Uninstalling NPM Packages --- 
// Commands 
// > npm uninstall package_name 
// > npm un package_name 
// > npm rm package_name 

// We add a -D flag if its a dev dependency
// > npm uninstall package_name -D 

// We add a -g flag if its a global dependency
// > npm rum package_name -g

// If its a production dependency then no flags
// > npm un package_name 

// If you uninstall a npm package it will not remove from your script