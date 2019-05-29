const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

class Cat {
  static get({ id }) {
    return { id };
  }

  static getAll() {
    return [{ id: 1 }];
  }
}

const CatType = new GraphQLObjectType({
  name: 'CatType',
  fields: {
    id: { type: GraphQLID },
  }
});

// TODO: query age for data transformation

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    cats: {
      type: new GraphQLList(CatType),
      resolve() {
        return Cat.getAll();
      }
    },
    cat: {
      type: CatType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(prevObject, { id }) {
        return Cat.get({ id });
      }
    },
  }),
});

module.exports = RootQueryType;
