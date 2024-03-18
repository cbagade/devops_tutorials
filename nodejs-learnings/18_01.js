const http = require("http")
const fs = require("fs")
const path = require("path")

const file_content = fs.readFileSync('./data/fruits_data.json', 'utf-8')
const fruits_json_data = JSON.parse(file_content)

const server = http.createServer((req, res) => {

    const pathname = req.url
    console.log(`pathname is ${pathname}`)

    if (pathname.toLowerCase() === '/fruits') {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(fruits_json_data))
    } else {
        res.writeHead(404,{
            "Content-Type" : "text/html"
        })

        res.end("<h1>Page not found.<h1><br\>Request can't be served")
    }

})


server.listen(3000, "127.0.0.1", () => {
    console.log('server listening on port 3000')
})