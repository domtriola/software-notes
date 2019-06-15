const express = require('express');
const app = express();

const port = 3000;

const cats = {
  1: {
    id: 1,
    name: 'Garfield',
    birthDate: 1336364059966,
    ownerId: 1,
  },
  2: {
    id: 2,
    name: 'Mr. Bigglesworth',
    birthDate: 267087600000,
    ownerId: 2,
  },
};

app.get('/cats', (req, res) => res.json(cats));
app.get('/cats/:id', (req, res) => res.json(cats[req.params.id]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
