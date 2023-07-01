// Using file system in Node.js in synchronous mode 

// Importing the library
const fs = require("fs");

console.log("Starting execution");


try {
  // Using writeFileSync to create a file and add sample text to it
  fs.writeFileSync('test.txt', 'Hello! This is my first file');
  console.log('File Created');

  // Creating another file to be deleted
  fs.writeFileSync('dummy.txt', 'Hello! This is my first file');
  console.log('File Created');

  // Using appendFileSync to add text to an already existing file
  fs.appendFileSync('test.txt', '\nThis is an added statement');
  console.log('File updated');

  // Using unlinkSync to delete a specific file
  fs.unlinkSync('dummy.txt');
  console.log('File Deleted');

  console.log('Finished execution');
} catch (err) {
  console.error(err);
}
