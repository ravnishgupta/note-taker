const path = require('path')
const fs = require('fs')
const { v4  } = require('uuid')

const saveNewNote = (body, notesArray) => {
    let note = body;
    note.id = v4();
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note;
  }

  const deleteNote = (id, notesArray) => {

  }

module.exports = saveNewNote