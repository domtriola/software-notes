const fetch = require('node-fetch');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const { CAT_SERVICE_ENDPOINT } = require('../../config');

// Schema
const CatType = new GraphQLObjectType({
  name: 'CatType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  }
});

// Resolver model
const Cat = {
  get: async ({ id }) => {
    const url = `${CAT_SERVICE_ENDPOINT}/cats/${id}`;
    const response = await fetch(url);
    const cat = await response.json();
    return cat;
  },

  getAll: async () => {
    const url = `${CAT_SERVICE_ENDPOINT}/cats`;
    const response = await fetch(url);
    const cats = await response.json();
    return Object.keys(cats).map(id => cats[id]);
  }
};

module.exports = {
  Cat,
  CatType,
};
