const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const chefDetails = require('./chefDetails.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send(chefDetails)
})
app.get('/chefDetails/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const singleData = chefDetails.find(sd=> parseInt(sd.id) === id)
  res.send(singleData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})