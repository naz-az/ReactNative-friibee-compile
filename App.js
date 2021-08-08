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

// import React from 'react';

// import Navigation from './Product-Page/Navigation';

// const App = () => {
//   return (
//     <Navigation />
//   );
// }

// export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//  import React from 'react';
//  import {View, StyleSheet} from 'react-native';
 
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
import { StyleSheet, Text, View } from 'react-native';
import Main from './SwipeFunction/src/Main';

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style="auto" />
    </>
  );
}

