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

// router.post('/animals', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = animals.length.toString();
  
//     if (!validateAnimal(req.body)) {
//       res.status(400).send('The animal is not properly formatted.');
//     } else {
//       const animal = createNewAnimal(req.body, animals);
//       res.json(animal);
//     }
//   });

app.post('/api/notes', (req, res) => {
    const note = saveNewNote(req.body, notes);
    res.json(note);
    //console.log(req.body)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
    //sendFile(path.join(__dirname, './develop/db/db.json'));
  });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

