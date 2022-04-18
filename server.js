const PORT = process.env.PORT || 3001;
//const { animals } = require('./data/animals');
const express = require('express');
const fs = require('fs');
const path = require('path');
//const { SourceMap } = require('module');

const app = express()
// parse incoming string or array data
//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/db/db.json'));
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});