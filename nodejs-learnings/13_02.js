const fs = require('fs')


function my_call_back(err,data){
    console.log(`${data}`)
}

fs.readFile('./data/course.txt','utf-8',my_call_back)


console.log('I want to go movie\n')