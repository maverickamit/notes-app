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

console.log(yargs.argv);
