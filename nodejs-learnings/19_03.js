const fs = require("fs")
const superagent = require("superagent")

// TO DISABLE CERTIFICATE VALIDATION CHECK
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const read_file_promise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('file not found')
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


read_file_promise('./promise_demo/do.txt')
    .then((dog_breed) => {
        return superagent.get(`https://dog.ceo/api/breed/${dog_breed}/images/random`)
    })
    .then((res) => {
        return write_file_promise('./new_dog.txt', res.body.message)
    }).then(() => {
        console.log('file written successfully')
    }).catch( (err) => {
        console.log(err)
    })