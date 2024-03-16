const http = require("http");
const fs = require("fs");
const url = require("url");

const file_content = fs.readFileSync("./data/fruits_data.json", "utf-8");
const fruits_json_data = JSON.parse(file_content)

function get_me_fruits(query) {
  let one_fruit = {}
  if (query == undefined || query.id == undefined) {
    return fruits_json_data
  } else {
    fruit = fruits_json_data[query.id]
    if (fruit != undefined) {
      one_fruit = fruit
    }
    return one_fruit
  }

}

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

    console.log(`query is ${JSON.stringify(query)}`)
    console.log(`query.id is ${query.id}`)

    const returned_fruits = get_me_fruits(query)
    res.end(JSON.stringify(returned_fruits))

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
