// using file system in node JS in asynchronous mode

// importing the library
const fs = require('fs');

console.log('Starting execution');
// using write file to create a file and add sample text to it
fs.writeFile('test.txt','Hello! this is my first file',(err)=>{
    if(err) throw err;
    console.log('File Created');
})

// creating anoter file to be deleted
fs.writeFile('dummy.txt','Hello! this is my first file',(err)=>{
    if(err) throw err;
    console.log('File Created');
})

// using append file to add text to an already existing file
fs.appendFile('test.txt','\nThis is added statement',(err)=>{
    if(err) throw err;
    console.log('File updated');
})

// using unlink to delete specific file
fs.unlink('dummy.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted');
})
console.log('Finished execution');

/*
OUTPUT:- 
    Starting execution
    Finished execution
    File Deleted
    File Created
    File Created
    File updated
*/