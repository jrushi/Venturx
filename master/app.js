const express = require('express')
const app = express()
const port = 3000

app.get('/app', (req, res) => {
  res.send('<p> Greetings ' + req.query['name'])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
