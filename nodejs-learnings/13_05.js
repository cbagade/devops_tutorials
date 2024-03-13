const fs = require('fs')


const new_file_content = 'This is content for new file'

fs.writeFile('new_file_1.txt',new_file_content,'utf-8',(err) => {
    console.log(`file is ready`)
})


console.log('I want to go movie\n')