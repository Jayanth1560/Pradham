const Users = require('../models/User')

exports.registerGET = (req,res)=>{
    res.send('<form action="/register" method="POST"><label for="username">Username:</label><input type="text" id="username" name="username"><br><br><label for="password">Password:</label> <input type="password" id="password" name="password"><br><br><button type="submit">Login</button></form>')
}

exports.registerPOST = (req,res)=>{
    const {username,password}= req.body;
    
    const user = new User({username,password});
    user.save()
  .then(() => console.log('User created'+` ${user}`))
  .catch(err => console.log(err));
  res.send('User successfully saved').redirect('/login');
} 