const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json')
const express = require('express');
const fs = require('fs');
const path = require('path');
const { SourceMap } = require('module');
const saveNewNote = require('./public/assets/js/notes');

const app = express()
// parse incoming string or array data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.post('/api/notes', (req, res) => {
    const note = saveNewNote(req.body, notes);
    res.json(note);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.delete('/api/notes/:id', (req, res) => {
    
}) 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

