const fs = require("fs")
const superagent = require("superagent")

// TO DISABLE CERTIFICATE VALIDATION CHECK
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const read_file_promise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('file not found - - - - - ')
            resolve(data)
        })
    })
}

const write_file_promise = (file, file_content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, file_content, 'utf-8', (err) => {
            if (err) reject('file cannot be written')
            resolve('success')
        })
    })

}

function sample(){

    console.log('anything sample')
}

const complete_process = async() => {
    
    const dog_breed =   await read_file_promise('./promise_demo/dog_1.txt')
    const res = await superagent.get(`https://dog.ceo/api/breed/${dog_breed}/images/random`)
    await write_file_promise('./new_file.txt',res.body.message)

    return "file written"
}





complete_process().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})