const express = require('express')
const app = new express()
const fs = require("fs")

app.use(express.json())

const fruits = fs.readFileSync('./data/fruits_data.json','utf-8')
const fruit_json = JSON.parse(fruits)

app.get('/api/v1/fruit_mart',(req,res)=>{
    res.status(200).json({message:'success', fruits:JSON.stringify(fruit_json)})
})

app.get('/api/v1/fruit_mart/:id', (req,res) =>{
    const id = req.params.id * 1
    const fruit = fruit_json[id]
    res.status(200).send({message:'success', fruit: JSON.stringify(fruit)})
})


app.post('/api/v1/fruit_mart',(req,res) =>{

    const fruit = req.body
    const new_id = fruit_json[fruit_json.length - 1].id + 1

    const new_fruit = Object.assign({id:new_id}, fruit)
    fruit_json.push(new_fruit)
    
    console.log(`new fruits is is ${JSON.stringify(fruit_json)}`)

    fs.writeFile('./data/fruits_data.json',JSON.stringify(fruit_json),'utf-8',err=>{
        res.status(200).send(`new fruits created with id ${new_id}`)
    })

    
})


const port = 3000
app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})