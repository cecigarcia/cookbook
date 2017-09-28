var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
var { recipes } = require("./app/fixtures/recipes");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Recipe {
    id: Int!
    name: String
  }

  type Query {
    recipes: [Recipe]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  recipes: () => {
    return recipes;
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
