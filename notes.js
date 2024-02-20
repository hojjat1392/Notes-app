const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

//load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    console.log(chalk.blue("File loaded successfully!"));
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

//add notes function
const addNote = (title, body) => {
  notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("The note added successfully!"));
  } else {
    console.log(chalk.magenta("This title has already been taken!"));
  }
};

//removing
const removeNote = (title) => {
  notes = loadNotes();

  const filteredNotes = notes.filter((note) => {
    return note.title != title;
  });
  if (filteredNotes.length != notes.length) {
    notes = filteredNotes;
    saveNotes(notes);
    console.log(chalk.green.inverse("Note Removed!"));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = function (notes) {
  const writeNote = JSON.stringify(notes);
  try {
    fs.writeFileSync("notes.json", writeNote);
  } catch (e) {
    console.log(chalk.red("Something is wrong!"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
