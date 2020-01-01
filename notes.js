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

const addNote = function(title, body) {
  fs.writeFileSync();
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body
  });
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
