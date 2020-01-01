const chalk = require("chalk");
const yargs = require("yargs");
const notesUtilities = require("./notes");
//create add command
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
  handler: function(argv) {
    notesUtilities.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "removing note",
  handler: function() {
    console.log("removing note");
  }
});

//create list command
yargs.command({
  command: "list",
  describe: "listing note",
  handler: function(argv) {
    console.log("reading list");
  }
});

//create remove command
yargs.command({
  command: "read",
  describe: "reading note",
  handler: function() {
    console.log("reading note");
  }
});

yargs.parse();
