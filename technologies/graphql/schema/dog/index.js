const graphql = require('graphql');
const timeStampToAge = require('../../utils/timeStampToAge');
const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = graphql;

const DogType = new GraphQLObjectType({
  name: 'DogType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    age: {
      type: GraphQLString,
      resolve: (prevObject) => timeStampToAge(prevObject.birthDate),
    },
  }
});

const DogInputType = new GraphQLInputObjectType({
  name: 'DogInputType',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    birthDate: { type: GraphQLString },
  },
});

module.exports = {
  DogType,
  DogInputType,
};
