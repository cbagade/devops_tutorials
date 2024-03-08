const fs = require('fs')



const content = fs.readFileSync('./data/course.txt','utf-8')
console.log(content)

console.log('should print last')