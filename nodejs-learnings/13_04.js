const fs = require('fs')


fs.readFile('./data/course.txt','utf-8',(err,data) => {
    console.log(`${data}`)
})


console.log('I want to go movie\n')