// writing js to run on server

//importing file system provided by node apis
const fs = require("fs");

fs.writeFile("notes-again.txt", "hello my name is rajan", {}, (err) => {
  console.log("file wrote");
});
console.log("hi server is started");
