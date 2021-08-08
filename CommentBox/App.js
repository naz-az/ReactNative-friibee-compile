// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React from 'react';
//  import {View, StyleSheet} from 'react-native';
//  import { useFonts, Nunito } from '@expo-google-fonts/nunito';

//  import Navigation from './SettingPage/Navigation';
 
//  const App: () => React$Node = () => {
//    return (
//      <Navigation /> 
//    );
//  };
 
//  const styles = StyleSheet.create({
   
//  });
 
//  export default App;


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Comment from './CommentBox/Comment';
import PostComment from './CommentBox/PostComment';
import Header from './CommentBox/Header';


export default function App() {
    return (
      <>
       <Header />
        <Comment />
        <PostComment />
        <StatusBar style="auto" />
      </>
    );
  }
