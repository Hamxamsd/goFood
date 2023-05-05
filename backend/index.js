const express = require('express');
const app = express();
const port = 5000;

// Connecting with MongoDB
const mongoDB = require('./dataBase');
mongoDB();

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

