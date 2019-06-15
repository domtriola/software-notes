const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const DogType = new GraphQLObjectType({
  name: 'DogType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  }
});

module.exports = DogType;
