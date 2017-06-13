import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';
import { View } from "react-native";

const Ingredient = ({ ingredient }) => (
  <ListItem>
    <Text>{ingredient.name}</Text>
  </ListItem>
);

const Category = ({ category, ingredients, firstItem }) => (
  <View>
    <ListItem itemHeader first={firstItem}>
      <Text>{category.name.toUpperCase()}</Text>
    </ListItem>
    {ingredients.filter(i => i.category.id === category.id).map(i => <Ingredient ingredient={i} />)}
  </View>
);

const IngredientsList = ({ ingredients, categories }) => (
  <List>
    {categories.map((c, i) => <Category category={c} ingredients={ingredients} firstItem={i === 0} />)}
  </List>
);

export default IngredientsList;
