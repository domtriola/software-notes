const express = require('express');
const app = express();

const port = 3000;

const cats = {
  1: {
    name: 'Fluffy',
    birthDate: 1336364059966,
  },
  2: {
    name: 'Garfield',
    birthDate: 267087600000,
  }
};

app.get('/cats', (req, res) => res.json(cats));

app.get('/cats/:id', (req, res) => res.json(cats[req.params[id]]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
