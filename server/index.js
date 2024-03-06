//importing modules
const express = require('express');

const cors = require('cors');
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')

//initialising server
const app = express()

//middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/login',loginRoutes())
app.use('/register',registerRoutes)

//database
require('./config/database');

app.get('/',loginRoutes);


app.get('/home',(req,res)=>{
    res.send("<p>you have successfully logged in and autherised </p>")
})
//running the server
app.listen(3000,()=>{
    console.log(`the server running at http://localhost:3000`)
})