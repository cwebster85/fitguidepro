require('dotenv').config()
const cors = require('cors')

const express = require('express')
const app = express();

app.use(cors())

app.use(express.json())
const port =  process.env.PORT || 3000

// test
app.get('/test', (req, res) => {
  res.send("Hi test!")
})

//apiRoutes
const apiRoutes = require('../backend/routes/workoutApi')
app.use(apiRoutes)

app.listen(port, () => {
  console.log("server is listening on port", port)
})