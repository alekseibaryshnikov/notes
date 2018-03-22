console.log('Starting app.js');

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
    console.log(`-- Title: ${res.title}`);
    console.log(`-- Body: ${res.body}`);
  } else {
    console.log('Title taken!');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  const res = notes.removeNote(argv.title);
  const message = res ? `Notes was removed!` : `Note not found!`;
  console.log(message);
} else {
  console.log('Command not recognized');
}
