const mongoose = require("mongoose");

// TODO replace <password> with the password for quicknote-admin
const URI = `mongodb+srv://quicknote-admin:admin@quicknote.ktmte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect };
