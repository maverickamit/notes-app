const fs = require("fs");
const getNotes = function() {
  return "your notes...";
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNote = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(singlenote) {
    return singlenote.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNote(notes);
    console.log("New note added.");
  } else {
    console.log("Note title is taken. Please try a new title.");
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
