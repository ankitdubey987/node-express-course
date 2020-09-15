const express = require('express')
const app = express()
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

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success:true,
        message: 'got one user',
        user: req.params.id
    })
});


app.listen(port,function(){
    console.log('server is running')
})