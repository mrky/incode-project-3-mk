const express = require('express');
const myData = require('./data');
console.log('my data is', myData);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello ' + myData[0]);
});

app.get('/users', (req, res) => {
    res.send('There are no users!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
