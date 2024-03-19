const fs = require("fs")
const superagent = require("superagent")

// TO DISABLE CERTIFICATE VALIDATION CHECK
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


fs.readFile('./promise_demo/dog.txt', 'utf-8', (err, dog_breed) => {
    console.log(`dog breed is ${dog_breed}`)

    superagent.get(`https://dog.ceo/api/breed/${dog_breed}/images/random`)
        .end((err, res) => {
            console.log(`the response is ${res.body.message}`)

            fs.writeFile('./new_file.txt', res.body.message, 'utf-8', (err) => {
                console.log('file written success')
            })

        })
})

console.log('This is topppppppppppppppppppppp levvvvvvvvvvvvvvvvel codeeeeeeeeeeeeee')