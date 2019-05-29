const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = require('./schema');

const port = 4000;

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));
