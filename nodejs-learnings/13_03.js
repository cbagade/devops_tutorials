const fs = require('fs')


fs.readFile('./data/course.txt','utf-8',function my_call_back(err,data){
    console.log(`${data}`)
})


console.log('I want to go movie\n')