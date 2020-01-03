// Using ES6 notations

const chalk = require("chalk");
const yargs = require("yargs");
const notesUtilities = require("./notes");

//creating add command
yargs.command({
  command: "add",
  describe: "adding note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "main text of the note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notesUtilities.addNote(argv.title, argv.body);
  }
});

//creating remove command
yargs.command({
  command: "remove",
  describe: "removing note",
  builder: {
    title: {
      describe: "title of the note to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notesUtilities.removeNote(argv.title);
  }
});

//creating list command
yargs.command({
  command: "list",
  describe: "listing note",
  handler() {
    notesUtilities.listNotes();
  }
});

//creating read command
yargs.command({
  command: "read",
  describe: "reading note",
  handler(argv) {
    notesUtilities.readNote(argv.title);
  }
});

yargs.parse();
