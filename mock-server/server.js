const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const PORT = 9001;

const FAKE_JSON_PATH = './fake.json';

app.use(cors());


app.get('/', (req, res) => {
    fs.readFile(FAKE_JSON_PATH, { encoding: 'utf-8' }, (err, data) => {
        res.json({data: JSON.parse(data), message: 'greetings!'});    
    });
});

app.get('/diego', (req, res) => {
    fs.readFile('./fake-diego.json', { encoding: 'utf-8' }, (err, data) => {
        res.json({data: JSON.parse(data)});    
    });    
});

app.listen(PORT, _ => {
    console.log(`server started at port ${PORT}`);
});
