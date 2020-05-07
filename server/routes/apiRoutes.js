const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "poetry";
const collections = ["poems"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});
// need to post poems//
app.post("/submit", (req, res) => {
  console.log(req.body);

  db.poems.insert(req.body, (error, poemdata) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });

})
// need to delete poem//

// need to update/add to exsisting poem//



