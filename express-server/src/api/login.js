const express = require('express')
// const cors = require('cors')
const app = express()
const port = 3000

// app.use(cors())
app.get('/login', (req, res) => {
  res.json({
      "statuscode": 200,
      "statusmessage":"success"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})