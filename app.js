const express = require('express');
const app = express();
const port = 3000;

const customMiddleware = (req, res, next) => {
    req.user = "Guest";
    next();
}

app.get('/welcome', customMiddleware, (req,res) => {
    res.send(`<h1>Welcome, ${req.user}</h1>`)
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
