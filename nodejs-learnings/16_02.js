const http = require("http")
const fs = require("fs")


const file_data = fs.readFileSync('./data/fruits_data.json','utf-8')

//create a server
const server = http.createServer((req,res)=>{
    
    const pathName = req.url
    console.log(`path name is ${pathName}`)

    if(pathName === '/banana'){
        res.end('I am response for banana')
    }else if(pathName === '/apple'){
        res.end('I am response for apple')
    }else if(pathName === '/fruits_data'){
        res.end(file_data)
    }else{
        res.end("Invalid request")
    }

})



// make you server listen to some port
server.listen(3000, "127.0.0.1", ()=>{
    console.log('listening on port 3000')
})