const fs = require('fs')

fs.readFile('./data/course.txt','utf-8', (err,data) =>{
    fs.readFile('./data/course_append.txt','utf-8',(err, append_data) =>{
        const new_file_content = data + "\n" + append_data
        fs.writeFile('new_file_3.txt',new_file_content,'utf-8', (err) =>{
            console.log('file written')
        })
    })
})