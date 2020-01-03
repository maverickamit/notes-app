const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "your notes...";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNote = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const readNote = title => {
  const notes = loadNotes();
  const noteSelected = notes.find(singlenote => (singlenote.title === title));
  if (noteSelected) {
    console.log(chalk.blueBright.inverse(noteSelected.title));
    console.log(chalk.yellow(noteSelected.body));
  } else {
    console.log(
      chalk.red.inverse("Note title doesn't exist. Please try a new title.")
    );
  }
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(singlenote => singlenote.title === title);

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

const listNotes = () => {
  console.log(chalk.blueBright.inverse("These are your notes!"));
  const notes = loadNotes();
  notes.forEach(element => console.log(chalk.yellow(element.title)));
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};
