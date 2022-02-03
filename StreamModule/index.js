const fs = require("fs");

const http = require("http");

const server = http.createServer();

//*This is normal approach

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });

  //* This is streaming approach
  //   const readStream = fs.createReadStream("input.txt");

  //   readStream.on("data", (chunkData) => {
  //     res.write(chunkData);
  //   });
  //   readStream.on("end", () => {
  //     res.end();
  //   });
  //   readStream.on("error", (err) => {
  //     console.log(err);
  //     res.end("File not found");
  //   });

  //* Pipe event

  const readStream = fs.createReadStream("input.txt");
  readStream.pipe(res);
});

server.listen(8000, "127.0.0.1");
