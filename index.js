const { log } = require('console');
const express = require('express');
const server = express();
const fs = require('fs');
const cors = require('cors');

server.use(express.json({extended: true}));


const readFile = () => {
    const content = fs.readFileSync('./data/data.json', 'utf8');
    return JSON.parse(content);
}

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    server.use(cors);
    next();
});

server.get('/', function (req, res) {
    const obj = readFile();
     return res.json(obj);
});

server.get('/:index', function (req, res) {
    const {index} = req.params;
    const obj = readFile();

    return res.json(obj[(index - 1)]);
});

server.listen(3000, function () {
    console.log('Server is running');
});