const express = require('express')
const app = express()
const port = 3000

const app2Url = process.env.APP2_URL ?? 'http://localhost:3001'

app.get('/', async (req, res) => {
  const app2Response = await fetch(app2Url).then(res => res.text())
  res.send('Response from app2: ' + app2Response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})