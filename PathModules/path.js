const path = require("path");

// console.log(path.dirname("D:/NodeJs/PathModules/path.js"));
// console.log(path.extname("D:/NodeJs/PathModules/path.js"));
// console.log(path.basename("D:/NodeJs/PathModules/path.js"));
// console.log(path.parse("D:/NodeJs/PathModules/path.js"));

const myPath = path.parse("D:/NodeJs/PathModules/path.js");
console.log(myPath.root);
