const fs = require('fs')



const file_content = fs.readFileSync('./data/course.txt','utf-8')

console.log(`the file content is ${file_content}`)


const new_file_content = 'This is new file content\n' + file_content

fs.writeFileSync('new_file.txt',new_file_content,'utf-8')

console.log('I want to go to movie')



