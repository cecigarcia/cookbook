var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
var { recipes } = require("./app/fixtures/recipes");
var { ingredients } = require("./app/fixtures/ingredients");
var { categories } = require("./app/fixtures/categories");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Recipe {
    id: Int!
    name: String
  }

  type Category {
    id: Int!
    name: String
    ingredients: [Ingredient]
  }

  type Ingredient {
    id: Int!
    name: String
    category: Category
  }

  type Query {
    recipes: [Recipe]
    categories: [Category]
    ingredients(categoryId: Int): [Ingredient]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  recipes: function () {
    return recipes;
  },

  categories: function () {
    return categories;
  },

  ingredients: function ({categoryId}) {
    return ingredients.filter(function (ingredient) {
      return ingredient.category.id === categoryId;
    });
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
