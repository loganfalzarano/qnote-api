const { v4: uuidv4 } = require("uuid");
this._id = uuidv4();

class Note {
    constructor(title, text) {
      this.title = title;
      this.text = text;
    }
  }
  
module.exports = Note;
  