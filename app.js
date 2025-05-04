const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Output from Middleware 1");
    next();
})

app.use((req, res, next) => {
    console.log("Output from Middleware 2");
    res.send("<h1>Hello Abhishek</h1>")
})


const port = 3000;
app.listen(port, ()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.")
});