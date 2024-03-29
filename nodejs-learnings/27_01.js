const express = require('express')
const logger = require("morgan")
const fruit_router = require("./fruit_routes_file")
const cafe_router = require("./menu_route_file")

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


app.use("/api/v1/fruit_mart",fruit_router)
app.use("/api/v1/cafe",cafe_router)

module.exports = app

