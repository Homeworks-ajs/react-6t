const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000;

const allNotes = [{
  id: 0,
  text: "orem10"
}];

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/notes', cors(corsOptions), (req, res) => {
  res.send(allNotes)
  // console.log(allNotes)
})

app.get('/notes/:id', cors(corsOptions), (req, res) => {
  console.log(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

