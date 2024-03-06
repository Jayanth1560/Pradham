const express = require('express')
const controllers = require('../controllers/registerController')

const router = express.Router();

router.get('/',controllers.registerGET)

router.post('/',controllers.registerPOST)

module.exports = router;