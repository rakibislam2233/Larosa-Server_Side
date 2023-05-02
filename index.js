const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const chefDetails = require('./chefDetails.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send(chefDetails)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})