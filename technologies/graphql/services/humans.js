const express = require('express');
const app = express();

const port = 3001;

const humans = {
  1: {
    id: 1,
    name: 'Jon Arbuckle',
  },
  2: {
    id: 2,
    name: 'Dr. Evil',
  },
};

app.get('/humans', (req, res) => res.json(humans));
app.get('/humans/:id', (req, res) => res.json(humans[req.params.id]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
