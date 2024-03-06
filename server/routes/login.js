const express = require('express')
const Users = require('../models/User')
const controllers= require('../controllers/loginController')

const router = express.Router()


router.get('/',controllers.loginGET)

router.post('/',controllers.loginPOST)

module.exports = function(){
    return router;
}