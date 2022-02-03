// console.log("Welcome to Nodejs World");
// console.log("3" * 5);

//* REPL
//* 1: JS expression
//* 2: use variables
//* 3: multiline code / loops
//* 4: use (_) to get the last result
//* 5: we can use editor mode

const name = "Aditya";
// console.log(name);

//Todo: To make a new file using node.js

const fs = require("fs");

//? fs.writeFileSync("read.txt", "Welcome to my World");
//? fs.writeFileSync("read.txt", "Welcome to my Node.js World");

//! fs.appendFileSync("read.txt", " Hello How are you?");

const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

//*<Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 4e 6f 64 65 2e 6a 73 20 57 6f 72 6c 64 20 48 65 6c 6c 6f 20 48 6f 77 20 61 72 65 20 79 6f 75 3f> //

//? Node.js includes an additional data-type called buffer.
//? (Not available in browser's JS)
//? Buffer is use to store binary data,
//? while reading from a file or recieving packets over the network

// org_data = buf_data.toString();

// console.log(org_data);

//* To rename file

fs.renameSync("read.txt", "readwrite.txt");

//*Used to make new file using cmd
// type nul > filename. txt .

//! fs.unlinkSync("bio.txt") delete file

//! fs.rmdirSync("folder name") delete folder

//* fs.mkdirSync("rahul"); // use to make new folder
