const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const { Cat, CatType } = require('../models/cat');
const { Dog, DogType } = require('../models/dog');

// TODO: query age for data transformation

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    cats: {
      type: new GraphQLList(CatType),
      resolve: () => {
        return Cat.getAll();
      }
    },
    cat: {
      type: CatType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (prevObject, { id }) => {
        return Cat.get({ id });
      }
    },
    dogs: {
      type: new GraphQLList(DogType),
      resolve: () => {
        return Dog.getAll();
      }
    },
    dog: {
      type: DogType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (prevObject, { id }) => {
        return Dog.get({ id });
      }
    },
  }),
});

module.exports = RootQueryType;
