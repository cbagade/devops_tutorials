const http = require("http")
const fs = require("fs")
const url = require("url")
const get_me_fruits = require("./18_03_module.js");

const file_content = fs.readFileSync('./data/fruits_data.json', 'utf-8')
const fruits_json_data = JSON.parse(file_content)


/*
function get_me_frits(query){

    if(query == undefined || query.id == undefined){
        return fruits_json_data
    }else{
        return fruits_json_data[query.id]
    }    
}
*/

const server = http.createServer((req, res) => {

    const {pathname, path, query} = url.parse(req.url, true)

    console.log(`pathname is ${pathname} and path is  ${path} and query ${JSON.stringify(query)}`)

    if (pathname.toLowerCase() === '/fruits') {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        const fruits = get_me_fruits(fruits_json_data,query)
        res.end(JSON.stringify(fruits))

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