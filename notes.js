// Using ES6 notations

const fs = require("fs");
const chalk = require("chalk");

// function to load all the notes in a variable
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// function to save all notes in a JSON file

const saveNote = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// function to read a note selected by title

const readNote = title => {
  const notes = loadNotes();

  // using notes.find to save time instead of using notes.filter because there is only one match or less.

  const noteSelected = notes.find(singlenote => singlenote.title === title);
  if (noteSelected) {
    console.log(chalk.blueBright.inverse(noteSelected.title));
    console.log(chalk.yellow(noteSelected.body));
  } else {
    console.log(
      chalk.red.inverse("Note title doesn't exist. Please try a new title.")
    );
  }
};

// function to add a note without any duplicate title

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(singlenote => singlenote.title === title);

  // checking for duplicate title existing already

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNote(notes);
    console.log(chalk.green.inverse("New note added."));
  } else {
    console.log(
      chalk.red.inverse("Note title is taken. Please try a new title.")
    );
  }
};

// function to remove a note selected by title

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(singlenote => singlenote.title !== title);

  if (notesToKeep.length === notes.length) {
    console.log(chalk.red.inverse("There is no note with this title."));
  } else {
    saveNote(notesToKeep);
    console.log(chalk.green.inverse("The note is deleted"));
  }
};

// function to list down all notes in the console

const listNotes = () => {
  console.log(chalk.blueBright.inverse("These are your notes!"));
  const notes = loadNotes();
  notes.forEach(element => console.log(chalk.yellow(element.title)));
};

// exporting the functions to be used from another file

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
