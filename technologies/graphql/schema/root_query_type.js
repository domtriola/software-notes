const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CatType = require('./cat');
const { DogType } = require('./dog');
const HumanType = require('./human');
const Cat = require('../resolvers/cat');
const Dog = require('../resolvers/dog');
const Human = require('../resolvers/human');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'The root of all queries',
  fields: () => ({
    cats: {
      type: new GraphQLList(CatType),
      resolve: Cat.getAll,
    },
    cat: {
      type: CatType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_prevObject, { id }) => Cat.get({ id }),
    },
    dogs: {
      type: new GraphQLList(DogType),
      resolve: Dog.getAll,
    },
    dog: {
      type: DogType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_prevObject, { id }) => Dog.get({ id }),
    },
    humans: {
      type: new GraphQLList(HumanType),
      resolve: Human.getAll,
    },
    human: {
      type: HumanType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_prevObject, { id }) => Human.get({ id }),
    },
  }),
});

module.exports = RootQueryType;
