const express = require('express')


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


const cafe_router = express.Router()


cafe_router.route('/').get(get_menu).post(create_a_menu_item)
cafe_router.route(':name').get(get_a_menu_item)

module.exports = cafe_router

