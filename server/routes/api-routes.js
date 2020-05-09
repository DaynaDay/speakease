const express = require("express");
const mongojs = require("mongojs");
const router = require("express").Router();

const app = express();

const databaseUrl = "poetry";
const collections = ["poems"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/api/PoemModel", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});
// need to post poems, use submit for now until button is made//
app.post("/submit", (req, res) => {
  console.log(req.body);

  db.poems.insert(req.body, (error, poemdata) => {
    if (error) {
      res.send(error);
    } else {
      res.send(poemdata);
    }
  });

})
// need to delete single poem//
app.delete("/clear", (req, res) => {
  db.poems.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});
// to delete book/category//
app.delete("/clear", (req, res) => {
  db.poems.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});


// need to update/add to exsisting poem//



module.exports = router;