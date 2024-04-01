const app = require("./27_01")
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path:'./express_demos/config.env'})

const db = process.env.DATABASE
console.log(db);


(
    async() =>{
        await mongoose.connect(db)
        console.log('connection success')
    }
)();


///////////////// SERVER  ////////////////////////

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})

///////////////// SERVER  ////////////////////////