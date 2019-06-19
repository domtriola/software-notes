const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const Human = new GraphQLObjectType({
  name: 'HumanType',
  fields: {
    // id: { type: GraphQLID },
    // name: { type: GraphQLString },
  },
});

module.exports = Human;
