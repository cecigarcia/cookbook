import React, { Component } from "react";
import {
  Container,
  Content,
} from 'native-base';
import { ApolloProvider } from "react-apollo";
import apolloClient from "../config/apollo-client";
import IngredientsList from "../components/ingredients-list";

class IngredientsListScreen extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Content>
            <IngredientsList />
          </Content>
        </Container>
      </ApolloProvider>
    );
  }
}

export default IngredientsListScreen;
