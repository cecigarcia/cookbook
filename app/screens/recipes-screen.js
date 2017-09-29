import React, { Component } from "react";
import { Container, Content } from 'native-base';
import RecipesList from "../components/recipes/recipes-list";

const RecipesScreen = () => (
  <Container>
    <Content>
      <RecipesList />
    </Content>
  </Container>
);

export default RecipesScreen;
