const http = require("http")

//create a server
const server = http.createServer((req,res)=>{
    console.log("Server Created and sending response")
    res.end("Hello DevOps Guys")
})



// make you server listen to some port
server.listen(3000, "127.0.0.1", ()=>{
    console.log('listening on port 3000')
})