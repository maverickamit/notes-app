const chalk = require("chalk");
const yargs = require("yargs");

//create add command
yargs.command({
  command: "add",
  describe: "Adding a new note",
  handler: function() {
    console.log("adding a new note");
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
  handler: function() {
    console.log("listing note");
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
