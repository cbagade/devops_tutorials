const express = require('express')
const fruit_controller= require("./fruit_contorller_file")


///////////////// ROUTES  ////////////////////////

const fruit_router = express.Router()

fruit_router.route('/').get(fruit_controller.get_all_fruits).post(fruit_controller.create_a_fruit)
fruit_router.route('/:id').get(fruit_controller.validateid,fruit_controller.get_a_fruit)

module.exports = fruit_router
