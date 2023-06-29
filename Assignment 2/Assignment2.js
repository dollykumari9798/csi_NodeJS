// using file system in node JS
const fs = require('fs');

fs.writeFile('test.txt','Hello! this is my first file',(err)=>{
    if(err) throw err;
    console.log('File Created');
})

fs.appendFile('test.txt','\nThis is added statement',(err)=>{
    if(err) throw err;
    console.log('File updated');
})

fs.unlink('mynewfile3.txt',(err)=>{
    if(err) throw err;
    console.log('File Deleted');
})