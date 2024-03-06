const express = require('express')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    }
)



module.exports= mongoose.model('Users',UserSchema);