const fetch = require('node-fetch');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const { DOG_SERVICE_ENDPOINT } = require('../../config');

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
const Dog = {
  get: async ({ id }) => {
    const url = `${DOG_SERVICE_ENDPOINT}/dogs/${id}`;
    const response = await fetch(url);
    const dog = await response.json();
    return dog;
  },

  getAll: async () => {
    const url = `${DOG_SERVICE_ENDPOINT}/dogs`;
    const response = await fetch(url);
    const dogs = await response.json();
    return Object.keys(dogs).map(id => dogs[id]);
  }
};

module.exports = {
  Dog,
  DogType,
};
