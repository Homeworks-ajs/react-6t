const express = require('express')
const app = express()
const shortid = require('shortid')
require('dotenv').config();
const cors = require('cors');
const port = process.env.SERVER_PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let allNotes = [];

app.get('/notes', (req, res) => {
  res.send(allNotes)
})

app.post('/notes', (req, res) => {
  allNotes.push({id: shortid.generate(), ...req.body })
  console.log(req.body)
  res.sendStatus(200);
})

app.delete('/notes/:id', (req, res) => {
  const removingId = req.params.id;
  allNotes = allNotes.filter(({id}) => id !== removingId)
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

