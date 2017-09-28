import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
} from 'native-base';
import { ApolloProvider } from "react-apollo";
import apolloClient from "../config/apollo-client";
import RecipesList from "../components/recipes/recipes-list";

class RecipesListScreen extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Content>
            <RecipesList />
          </Content>
        </Container>
      </ApolloProvider>
    );
  }
}

export default RecipesListScreen;
