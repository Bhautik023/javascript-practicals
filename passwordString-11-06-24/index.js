const fs = require("fs");
let data = "";
fs.readFile("password.txt", (error, text) => {
  if (error) throw error;
  data = text.toString();
  let lines = data.split("\n");
  
  lines.map((line) => {
    let eachLine = line.split(':')
    // +eachLine[3]
    // if (eachLine[3] > 500)
    console.log(`user: ${eachLine[0]}, userID: ${eachLine[3]}, Command Interpreter: ${eachLine[6]}`)
  })
});