import Home from '../Home';
import Category from '../Category';
import New from '../New';
import Login from '../Login';
import {
  StyleSheet,
  Image
} from 'react-native';
import { width, height } from 'react-native-dimension';
import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
const Navigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "TRANG CHỦ",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../medias/icHome.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      })
    },
    Category: {
      screen: Category,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "DANH MỤC",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../medias/icCatagory.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      })
    },
    New: {
      screen: New,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "TIN TỨC",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../medias/icNews.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      })
    },
    Account: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "TÀI KHOẢN",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../../medias/icAcount.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),
      })
    },
  },
  {
    initialRouteName:'Home',

    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      animationEnabled: true,
      },
  },
);
const styles = StyleSheet.create({
  icon: {
    width: width(7),
    height: height(4),
    //backgroundColor:'blue'
  },
});
export default Navigation;