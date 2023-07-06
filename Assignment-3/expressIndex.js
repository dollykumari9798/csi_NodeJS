// basic express server with simple APIs 
const express = require('express'); // importing express library

const app = express(); // creating express server
app.use(express.json()); // for parsing the incoming input to JSON

var data=[]; // imitation of a database

// basic `/` route for home
app.get('/',(req,res)=>{
    res.send({message:'Get request completed'});
})

// to get all the data from `data` array
app.get('/data',(req,res)=>{
    res.send(data).status(200);
})

// to add data to the `data` array
app.post('/data',(req,res)=>{
    let UserIn = req.body;
    console.log(UserIn);
    data.push(UserIn)
    res.send('data added successfully').status(200);
})

// to find and update specific data by id
app.put('/data/:id',(req,res)=>{
    let {id} = req.params;
    console.log(id, req.body);
    data.forEach(ele=>{
        console.log(ele);
        if(ele.id === id){
            // {id:ele.id,name:req.body.name,email: ele.email}
            console.log(ele);
        }
    })
    res.send('data found');
})


// initiating express server
app.listen(5000,()=>{ 
    console.log(`Server running on http://127.0.0.1:5000`);
})