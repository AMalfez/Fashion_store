const express = require('express');
const app = express();
const port = 5000;

app.get('/cart', (req,res)=>{
    res.send('hello cart!')
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/cart`);
})
