const fs = require("fs")

setTimeout(()=> console.log('timeout function'), 5000)

fs.readFile('./promise_demo/dog.txt','utf-8',(err,data) =>{
    console.log('callback is registered')
})

console.log('This is top level code')