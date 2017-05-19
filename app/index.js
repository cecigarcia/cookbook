import React, { Component } from "react";
import {
  AppRegistry,
  View,
} from "react-native";
import { StackNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";
import {
  Container,
  Content,
  Button,
  Text,
  List,
  ListItem,
} from 'native-base';
import IngredientsListScreen from "./screens/ingredients-list-screen";

class RecipesListScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

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
