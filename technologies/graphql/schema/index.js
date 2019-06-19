const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./root_query_type');
const RootMutationType = require('./root_mutation_type');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
  // TODO: subscription: Subscription,
});
