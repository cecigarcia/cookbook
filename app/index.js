import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { IngredientsScreen, RecipesScreen } from "./screens";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./config/apollo-client";

const MainScreenNavigator = TabNavigator({
  Recipes: { screen: RecipesScreen },
  Ingredients: { screen: IngredientsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: "My Cookbook",
};

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
});

class Cookbook extends React.Component {
  render(){
    return(
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    )
  }
}

AppRegistry.registerComponent('Cookbook', () => Cookbook);
