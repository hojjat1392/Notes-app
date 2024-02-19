const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

//load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json");
    const dataJson = dataBuffer.toString();
    console.log(chalk.blue("File loaded successfully!"));
    return JSON.parse(dataJson);
  } catch (e) {
    console.log(chalk.red("Something is wrong!"));
  }
};

//add notes function
const addNote = (title, body) => {
  const notes = loadNotes();

  notes.title = title;
  notes.body = body;

  const writeNote = JSON.stringify(notes);
  try {
    fs.appendFileSync("data.json", writeNote);
    console.log(chalk.green("New task was added successfully!"));
  } catch (e) {
    console.log(chalk.red("Problem to adding tasks!. Something is wrong!"));
  }
};

module.exports = {
  addNote: addNote,
};
