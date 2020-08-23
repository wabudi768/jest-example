const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ 
  	name: 'john doe', 
  	age: 28 , 
  	city: 'jakarta', 
  	state: 'DKI jakarta', 
  	country: 'indonesian',
  })
})

module.exports = app