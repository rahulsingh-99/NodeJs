const fs = require("fs");

const http = require("http");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userApi.json`, "utf-8");
  const objData = JSON.parse(data);

  //   console.log(req.url);

  if (req.url == "/") {
    res.end("Hello from NodeJs");
  } else if (req.url == "/about") {
    res.end("Hello toh kaise h aap log?");
  } else if (req.url == "/contact") {
    res.end("Hello Contact");
  } else if (req.url == "/userapi") {
    //* fs.readFile(`${__dirname}/UserApi/userApi.json`, "utf-8", (err, data) => {
    //*   console.log(data);
    //*   const objData = JSON.parse(data);
    //*   res.end(data);
    //* });

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData[14].price);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Error</h1>");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Listening to the port no. 4000");
});
