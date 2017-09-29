import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import { recipes } from "./app/fixtures/recipes";
import { ingredients } from "./app/fixtures/ingredients";
import { categories } from "./app/fixtures/categories";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
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

const fetchIngredients = id => ingredients.filter(i => i.category.id === id);

// The root provides a resolver function for each API endpoint
const rootValue = {
  recipes: () => recipes,
  categories: () => categories.map(c => ({ ...c, ingredients: fetchIngredients(c.id) })),
  ingredients: ({categoryId}) => fetchIngredients(categoryId),
};

const app = express();
app.use('/graphql', graphqlHTTP({ schema, rootValue, graphiql: true }));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
