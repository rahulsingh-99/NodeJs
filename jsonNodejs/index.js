const fs = require("fs");

const bioData = {
  name: "Rahul Singh",
  age: 21,
  occupation: "Student",
  langauge: "JS, React.js, Node.js",
};

// console.log(bioData.langauge);

const jsonData = JSON.stringify(bioData); //*Stringify we use that time when we have to convert object in JSON

// const objData = JSON.parse(jsonData); //* Parse convert JSON to object

fs.writeFile("json1.json", jsonData, () => {
  console.log("File create sucessfully");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  //   console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
