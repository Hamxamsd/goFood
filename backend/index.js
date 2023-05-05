const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./dataBase');

mongoDB();


app.get('/', (req, res) => {
    res.send('Welcome to backend');
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

