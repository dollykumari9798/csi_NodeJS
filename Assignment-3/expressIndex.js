// simple express server with basic CRUD APIs
const express = require("express"); // importing express library
const axios = require("axios"); // importing fetch library
const jwt = require("jsonwebtoken"); // importing fetch library

const app = express(); // creating express server
app.use(express.json()); // for parsing the incoming input to JSON

// basic `/` route for home
app.get("/", (req, res) => {
    res.send({
        information: {
            "To get All Users": "GET at http://127.0.0.1:5000/user",
            "To get single User": "GET at http://127.0.0.1:5000/user/:id",
            "To add a User": "POST at http://127.0.0.1:5000/user",
            "To update a User": "PUT at http://127.0.0.1:5000/user/:id",
            "To delete User": "DELETE at http://127.0.0.1:5000/user/:id",
        },
    });
});

// to get all the data from `data` array
app.get("/user", (req, res) => {
    axios
        .get("http://localhost:3000/data")
        .then((result) => res.send(result.data))
        .catch((err) => {
            console.log(err.message);
            res.status(400);
        });
});

// to add data to the `data` array
app.post("/user", (req, res) => {
    let UserIn = req.body;
    console.log(UserIn);
    axios
        .post("http://localhost:3000/data", UserIn)
        .then((result) => {
            // console.log(result);
            res.send("data added successfully").status(200);
        })
        .catch((err) => {
            console.log(err.message);
            res.send(err.message);
        });
});

// to find and update specific user by id
app.put("/user/:id", (req, res) => {
    let { id } = req.params;
    let UserIn = req.body;
    axios
        .put(`http://localhost:3000/data/${id}`, UserIn)
        .then((result) => res.send(result.data))
        .catch((err) => {
            console.log(err.message);
            res.send("unable to update");
        });
});

// to find a specific user
app.get("/user/:id", (req, res) => {
    let { id } = req.params;
    axios
        .get(`http://localhost:3000/data/${id}`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((err) => console.log(err));
});

// to delete a user
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    axios
        .get(`http://localhost:3000/data/${id}`)
        .then((result) => {
            res.send({ "deleted Record": result.data });
        })
        .catch((err) => console.log(err));
});

// function to create JWT
const createToken = (id) => {
    return jwt.sign({ id }, "DollySecretToken", { expiresIn: 600 });
};

// creating a jwt token
app.get("/getjwt/:id", (req, res) => {
    let { id } = req.params;
    axios
        .get(`http://localhost:3000/data/${id}`)
        .then((result) => {
            res.send({ jwt: createToken(result.data.name) });
        })
        .catch((err) => {
            console.log(err.message);
            res.send("an error occured");
        });
});

// initiating express server
app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`);
});
