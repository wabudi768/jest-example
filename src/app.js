const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(201).json({ name: 'john doe' })
})

module.exports = app
