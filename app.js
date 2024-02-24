const chalk = require("chalk");
const yargs = require("yargs");

const note = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body!",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    note.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Enter the title you want to delete",
      demandOption: true,
      type: "String",
    },
  },

  handler(argv) {
    note.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    console.log("Listing out all notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  },
});

yargs.parse();
