const express = require('express')
const Users = require('../models/User')
exports.loginGET = (req,res)=>{
    const form=`
    <form action="/react/login" method="POST">
    </form>
    `;
    res.send(form);

}

exports.loginPOST = (req,res)=>{
    const {username,password}= req.body;
    Users.findOne({username:username}).then(
        (user)=>{
            if(username===user.username && password===user.password){
                res.redirect('/home')
            }
            else{
                res.send('invalid password')
            }
        }
    )
    

}

