import React, { Component } from "react";
import { Container, Content } from 'native-base';
import IngredientsList from "../components/ingredients-list";

const IngredientsScreen = () => (
  <Container>
    <Content>
      <IngredientsList />
    </Content>
  </Container>
);

export default IngredientsScreen;
