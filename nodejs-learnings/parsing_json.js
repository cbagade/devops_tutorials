const http = require("http");
const fs = require("fs");

const fileData = fs.readFileSync("./data/fruits_data.json", "utf-8");
// conversion of string to JSON
const jsonData = JSON.parse(fileData);


// creating server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log("pathName is ", pathName);

  if (pathName === "/fruits") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    jsonData.map((one_fruit) => {
      // conversion of JSON to string, since input to console.log , can only be string
      console.log(`printing fruit - ${JSON.stringify(one_fruit)}`);
    });

    res.end(fileData);
  } else {
    // header is mechanism to provide information about
    // response to client or browser
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });

    res.end("Page not found !!!. \n The header should be text/plain");
  }
});

// listening to incoming request
server.listen(3000, "127.0.0.1", () => {
  console.log("Server listening to request on port 3000");
  console.log("Hit http://localhost:3000/fruits on browser");
});
