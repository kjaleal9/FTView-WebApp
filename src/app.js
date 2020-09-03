const path = require('path');
const express = require('express');
const hbs = require('hbs');



const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewsDirectory = path.join(__dirname, '../templates/views');
const partialsDirectory = path.join(__dirname, '../templates/partials');

// Setup static directory to use
app.use(express.static(publicDirectory));



app.get('/', (req, res) => {
    res.send('This is the app');
});

app.listen(5000, () => {
    console.log('Server is up on port 5000');
});
