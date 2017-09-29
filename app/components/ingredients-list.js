import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
} from 'native-base';
import { View } from "react-native";
import { gql, graphql } from "react-apollo";

const MyQuery = gql`query
  MyQuery {
    categories {
      id
      name
      ingredients {
        id
        name
      }
    }
 }`;

const Ingredient = ({ ingredient }) => (
  <ListItem>
    <Text>{ingredient.name}</Text>
  </ListItem>
);

const Category = ({ category, firstItem }) => (
  <View>
    <ListItem itemHeader first={firstItem}>
      <Text>{category.name.toUpperCase()}</Text>
    </ListItem>
    {category.ingredients.map(i => <Ingredient ingredient={i} />)}
  </View>
);

const IngredientsList = ({ data }) => {
  if (data.networkStatus === 1) {
    return <Text>loading...</Text>
  }

  if (data.error) {
    return <Text>Error!</Text>
  }

  return(
    <List>
      {data.categories.map((c, i) => <Category category={c} firstItem={i === 0} />)}
    </List>
  );
}

export default graphql(MyQuery, { options: { notifyOnNetworkStatusChange: true }})(IngredientsList);
