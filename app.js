const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) =>{
    res.send("<h1>Here is the list of all products</h1>");
})

app.post('/products', (req, res, next) => {
    res.send("A new order has been added");
})

app.get('/categories', (req, res) =>{
    res.send("<h1>Here is the list of all categories</h1>");
})

app.post('/categories', (req, res, next) => {
    res.send("A new category has been created");
})

app.use((req, res) =>{
    res.status(404).send('<h1>404 - Page Not Found</h1>');
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
