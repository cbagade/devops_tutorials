const http = require("http");
const fs = require("fs");
const url = require("url");

const fileData = fs.readFileSync("./data/fruits_data.json", "utf-8");

// creating server
const server = http.createServer((req, res) => {

  const { pathname, path, query } = url.parse(req.url, true);
  console.log(
    `The url props are - pathName is ${pathname} and path is ${path}, and query is ${JSON.stringify(
      query
    )}`
  );

  if (pathname === "/fruits") {
    res.writeHead(200, {
      "Content-Type": "application/json",
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
  console.log(
    "Hit http://localhost:3000/fruits"
  );
});
