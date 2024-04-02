const app = require("./27_01")


///////////////// SERVER  ////////////////////////

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})

///////////////// SERVER  ////////////////////////