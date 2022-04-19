const path = require('path')
const fs = require('fs')

const saveNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);
    //console.log(path.join(__dirname, '../../../db/db.json'))
    fs.writeFileSync(
      path.join(__dirname, '../../../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
  
  }

module.exports = saveNewNote