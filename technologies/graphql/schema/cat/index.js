const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const CatType = new GraphQLObjectType({
  name: 'CatType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  }
});

module.exports = CatType;
