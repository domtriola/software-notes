const fetch = require('node-fetch');
const fs = require('fs');
const graphql = require('graphql');
const path = require('path');
const yaml = require('js-yaml');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

// Schema
const DogType = new GraphQLObjectType({
  name: 'DogType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  }
});

// Resolver model
const DATA_PATH = path.join(__dirname, '..', '..', 'services', 'dogs.yaml');
const DOC = yaml.safeLoad(fs.readFileSync(DATA_PATH, 'utf8'));

const Dog = {
  get: async ({ id }) => {
    const { dogs } = DOC;
    return dogs[id];
  },

  getAll: async () => {
    const { dogs } = DOC;
    return Object.keys(dogs).map(id => dogs[id]);
  }
};

module.exports = {
  Dog,
  DogType,
};
