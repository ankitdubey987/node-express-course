const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json());
const port = 3000

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]

app.get("/users", (req, res) => {
  res.json({
      success:true,
      message:'successfully got users. Nice!',
      users: mockUserData
  })
})

// colon is used as variable that be viewed in the params
app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success:true,
        message: 'got one user',
        user: req.params.id
    })
});

app.post("/login", (req, res) => {
    //   typically passwords are encrypted using something like bcrypt before sending to database
  const username = req.body.username
  const password = req.body.password

  const mockUsername = 'billyTheKid'
  const mockPassword = 'superSecret'

  if(username===mockUsername && password===mockPassword){
    // In practice, use JSON web token sign method here to make an encrypted token
      res.json({
          success:true,
          message:'password and username matched!',
          token: 'encrypted token goes here'
      })
  }else{
      res.json({
          success:false,
          message:'password and username do not matched!'
      })
  }
});

app.listen(port,function(){
    console.log('server is running')
})