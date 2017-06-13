import React, { Component } from "react";
import {
  Container,
  Content,
} from 'native-base';
import IngredientsList from "../components/ingredients-list";
import { ingredients, categories } from "../fixtures/ingredients";

class IngredientsListScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <IngredientsList ingredients={ingredients} categories={categories} />
        </Content>
      </Container>
    );
  }
}

export default IngredientsListScreen;
