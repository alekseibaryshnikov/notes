console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNote = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  
  const notes = fetchNotes();
  
  const note = {
    title,
    body
  }
  
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  }

};

var getAll = () => {
  console.log(json.readJson());
};

var getNote = (title) => {
  console.log('Getting note', title);
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const clearedNotes = notes.filter(note => note.title !== title);
  saveNote(clearedNotes);
  
  return notes.length !== clearedNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
