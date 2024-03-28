const express = require('express')
const fs = require("fs")
const logger = require("morgan")

const app = new express()

///////////////// MIDDLEWARE  ////////////////////////
app.use(logger('dev'))

app.use(express.json())

app.use( (req,res,next)=>{
    console.log('I am coming from middleware')
    next()  
})

app.use( (req,res,next)=>{
    console.log('I am coming from middleware 2')
    next()
})

///////////////// MIDDLEWARE  ////////////////////////

///////////////// FRUITS  ////////////////////////

const fruits = fs.readFileSync('./data/fruits_data.json','utf-8')
const fruit_json = JSON.parse(fruits)

const get_all_fruits = (req,res)=>{
    console.log('I am coming from method')
    res.status(200).json({message:'success', fruits:JSON.stringify(fruit_json)})
}

const get_a_fruit = (req,res) =>{
    console.log('I am coming from method')
    const id = req.params.id * 1
    const fruit = fruit_json[id]
    res.status(200).json({message:'success', fruit: JSON.stringify(fruit)})
}


const create_a_fruit = (req,res) =>{
    const fruit = req.body
    console.log(`fruit ${fruit}`)
    const new_id = fruit_json[fruit_json.length - 1].id + 1
    const new_fruit = Object.assign({id:new_id}, fruit)
    fruit_json.push(new_fruit)
    console.log(`new fruits is is ${JSON.stringify(fruit_json)}`)
    fs.writeFile('./data/fruits_data.json',JSON.stringify(fruit_json),'utf-8',err=>{
        res.status(200).send(`new fruits created with id ${new_id}`)
    })
}

///////////////// FRUITS  ////////////////////////

///////////////// MENU  ////////////////////////

const get_menu = (req,res) =>{
    res.send('assignment - need to be implemented')
}

const get_a_menu_item = (req,res) =>{
    res.send('assignment - need to be implemented')
}

const create_a_menu_item = (req,res) =>{
    res.send('assignment - need to be implemented')
}

///////////////// MENU  ////////////////////////

///////////////// ROUTES  ////////////////////////

app.route('/api/v1/fruit_mart/:id').get(get_a_fruit)
app.route('/api/v1/fruit_mart').get(get_all_fruits).post(create_a_fruit)

app.route('/api/v1/cafe/:name').get(get_a_menu_item)
app.route('/api/v1/cafe').get(get_menu).post(create_a_menu_item)
///////////////// ROUTES  ////////////////////////

///////////////// SERVER  ////////////////////////

const port = 3000
app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})

///////////////// SERVER  ////////////////////////