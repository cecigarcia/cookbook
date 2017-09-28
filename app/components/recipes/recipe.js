import React from "react";
import {
  ListItem,
  Text,
} from 'native-base';

const Recipe = ({ recipe }) => (
  <ListItem>
    <Text>{recipe.name}</Text>
  </ListItem>
);

export default Recipe;
