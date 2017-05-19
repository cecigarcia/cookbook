import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';

const Ingredient = ({ ingredient }) => (
  <ListItem>
    <Text>{ingredient.name}</Text>
  </ListItem>
);

const IngredientsList = ({ ingredients }) => (
  <List>
    {ingredients.map(i => <Ingredient ingredient={i} />)}
  </List>
);

export default IngredientsList;
