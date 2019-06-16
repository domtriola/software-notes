const graphql = require('graphql');
const Human = require('../../resolvers/human');
const HumanType = require('../human');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const CatType = new GraphQLObjectType({
  name: 'CatType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    owner: {
      type: HumanType,
      resolve: (prevObject) => Human.get({ id: prevObject.ownerId }),
    },
  },
});

module.exports = CatType;
