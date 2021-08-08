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
import 'react-native-gesture-handler';

import Function from './bottom-tab-bar/Function';


export default function App() {
    return (
      <>
      
        <Function />
        <StatusBar style="auto" />
      </>
    );
  }

