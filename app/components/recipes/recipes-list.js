import React from "react";
import {
  List,
  Text,
} from 'native-base';
import { gql, graphql } from "react-apollo";
import Recipe from "./recipe";
import { View } from "react-native";

const MyQuery = gql`query
  MyQuery {
    recipes {
      name
    }
 }`;

const RecipesList = ({ data }) => {
  if (data.networkStatus === 1) {
    return <Text>loading...</Text>
  }

  if (data.error) {
    return <Text>Error!</Text>
  }

  return(
    <View>
      <List>
        {data.recipes.map((r, i) => <Recipe key={i} recipe={r} />)}
      </List>
    </View>
  );
}

export default graphql(MyQuery, { options: { notifyOnNetworkStatusChange: true }})(RecipesList);
