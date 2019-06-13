const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const { Cat, CatType } = require('./cat');
const { Dog, DogType } = require('./dog');

// TODO: query age for data transformation

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    cats: {
      type: new GraphQLList(CatType),
      resolve: () => Cat.getAll(),
    },
    cat: {
      type: CatType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_prevObject, { id }) => Cat.get({ id }),
    },
    dogs: {
      type: new GraphQLList(DogType),
      resolve: () => Dog.getAll(),
    },
    dog: {
      type: DogType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_prevObject, { id }) => Dog.get({ id }),
    },
  }),
});

module.exports = RootQueryType;
