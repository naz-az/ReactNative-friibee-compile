import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppNavigator from './SRCC/navigations/Navigator';
import AppLoading from 'expo-app-loading';

import Function from './bottom-tab-bar/Function';

export default class App extends React.Component{
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Bold':require('./SRCC/fonts/KonnectBold.otf'),
      'Medium':require('./SRCC/fonts/KonnectMedium.otf'),
      'Regular':require('./SRCC/fonts/KonnectRegular.otf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
    (this.state.isFontLoaded === true)?(<AppNavigator/>) : (<AppLoading/>)
      );
  }
  
}
