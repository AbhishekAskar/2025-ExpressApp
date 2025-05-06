const express = require('express');
const app = express();
const port = 3000;

app.get('/welcome/:username', (req, res)=>{
    const name = req.params.username;
    const role = req.query.role;
    res.send(`Hello my name is ${name}, and my role is ${role}.`)
})

app.listen(port, () => {
    console.log("Server is running on port 3000");
});
