const graphql = require('graphql');
const timeStampToAge = require('../../utils/timeStampToAge');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

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

module.exports = DogType;
