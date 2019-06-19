const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const Dog = require('../resolvers/dog');
const { DogType, DogInputType } = require('./dog');

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'The root of all mutations',
  fields: () => ({
    addDog: {
      type: DogType,
      description: 'Adds a new dog to the Dog service',
      args: {
        dog: { type: DogInputType },
      },
      resolve: async (_, { dog }) => {
        const dogs = Dog.add(dog);
        return dogs;
      },
    }
  }),
});

module.exports = RootMutationType;
