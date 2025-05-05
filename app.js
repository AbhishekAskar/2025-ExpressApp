const express = require('express');
const app = express();
const port = 3000;

app.get('/orders', (req, res) =>{
    res.send("<h1>Here is all the list of orders<h1>");
})

app.post('/orders', (req, res, next) => {
    res.send("A new order has been created");
})

app.get('/users', (req, res) =>{
    res.send("<h1>Here is all the list of all new users<h1>");
})

app.post('/users', (req, res, next) => {
    res.send("A new user has been added");
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
