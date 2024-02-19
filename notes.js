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
  } else {
    console.log(chalk.magenta("This title has already been taken!"));
  }
};

const saveNotes = function (notes) {
  const writeNote = JSON.stringify(notes);
  try {
    fs.writeFileSync("notes.json", writeNote);
    console.log(chalk.green("New task was added successfully!"));
  } catch (e) {
    console.log(chalk.red("Problem to adding tasks!. Something is wrong!"));
  }
};

module.exports = {
  addNote: addNote,
};
