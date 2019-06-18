const graphql = require('graphql');
const Human = require('../../resolvers/human');
const HumanType = require('../human');
const timeStampToAge = require('../../utils/timeStampToAge');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

// TODO: Refactor "Pet" fields into a common object

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
    age: {
      type: GraphQLString,
      resolve: (prevObject) => timeStampToAge(prevObject.birthDate),
    },
  },
});

module.exports = CatType;
