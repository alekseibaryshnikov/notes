const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  const res = notes.addNote(argv.title, argv.body);
  if (res) {
    console.log(`Note has been added...`);
    notes.logNote(res);
  } else {
    console.log('Title taken!');
  }
} else if (command === 'list') {
  const noteList = notes.getAll();
  console.log(`Count of notes: ${noteList.length}`)
  noteList.forEach(note => {
    notes.logNote(note);
  });
} else if (command === 'read') {
  const res = notes.getNote(argv.title);
  if (res) {
    console.log('Founded note:');
    notes.logNote(res);
  } else {
    console.log('Note not found!');
  }
} else if (command === 'remove') {
  const res = notes.removeNote(argv.title);
  const message = res ? `Notes was removed!` : `Note not found!`;
  console.log(message);
} else {
  console.log('Command not recognized');
}
