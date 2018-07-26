import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigation from './src/components/tabbars/TabNavigation';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});
