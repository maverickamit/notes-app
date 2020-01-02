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

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(singlenote => singlenote.title === title);
  if (duplicateNotes.length === 0) {
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
  listNotes
};
