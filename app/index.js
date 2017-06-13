import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import IngredientsListScreen from "./screens/ingredients-list-screen";
import RecipesListScreen from "./screens/recipes-list-screen";

const MainScreenNavigator = TabNavigator({
  Recipes: { screen: RecipesListScreen },
  Ingredients: { screen: IngredientsListScreen },
});

MainScreenNavigator.navigationOptions = {
  title: "My Cookbook",
};

const Cookbook = StackNavigator({
  Home: { screen: MainScreenNavigator },
});

AppRegistry.registerComponent('Cookbook', () => Cookbook);
