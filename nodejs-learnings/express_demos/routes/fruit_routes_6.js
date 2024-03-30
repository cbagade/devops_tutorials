const express = require('express');
const controller = require('../controller/fruit_controller_4')


/*
 * ROUTES SECTION
 */

// Lets create routes as middleware now
const router = express.Router();

/*
 * ACTUAL ROUTES
 */

router.route("/").get(controller.getAllFruits).post(controller.createFruit);
router.route("/:id").get(controller.getAFruitByID).patch(controller.patchFruit).delete(controller.deleteFruit);
router.route("/fruit_name/:name").get(controller.getAFruitByName).patch(controller.patchFruitByName)

module.exports = router;