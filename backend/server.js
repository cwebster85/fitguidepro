require('dotenv').config();
const apiKey = process.env.API_KEY;

const axios  = require('axios')
const express = require('express')

const app = express()
const port = 3000

//root
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//api get request
var muscle = 'biceps';
app.get('/api/external-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=' + muscle, 
    {
      headers: {
        'X-Api-Key': apiKey
        },
    })
    const data = response.data
    res.json(data)
  } catch (error) {
    console.error("error making API call")
    res.status(500).json({ error: 'Internal Server Error'})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
