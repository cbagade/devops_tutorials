const express = require('express')
const menu_controller= require("./menu_contorller_file")







///////////////// ROUTES  ////////////////////////


const cafe_router = express.Router()


cafe_router.route('/').get(menu_controller.get_menu).post(menu_controller.create_a_menu_item)
cafe_router.route(':name').get(menu_controller.get_a_menu_item)

module.exports = cafe_router
