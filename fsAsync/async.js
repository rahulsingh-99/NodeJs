const fs = require("fs");

fs.writeFile("read.txt", "How are you?", (err) => {
  console.log("Completed");
  console.log(err);
});

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log("Successfully");
  console.log(data);
});
