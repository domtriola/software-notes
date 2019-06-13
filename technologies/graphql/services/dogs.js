const express = require('express');
const app = express();

const port = 3001;

const dogs = {
  1: {
    id: 1,
    name: 'Clifford',
    birthDate: -241557313515,
  },
  2: {
    id: 2,
    name: 'Spot',
    birthDate: 1525668498349,
  }
};

app.get('/dogs', (req, res) => res.json(dogs));
app.get('/dogs/:id', (req, res) => res.json(dogs[req.params.id]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
