// writing js to run on server

//importing file system provided by node apis
const fs = require("fs");
const http = require("http");

// dotenv.config();
fs.writeFile("notes-again.txt", "hello my name is rajan", {}, (err) => {
  console.log("file wrote");
});

http.createServer((req, res) => {
  res.end("server working on port:" + 3000);
});
