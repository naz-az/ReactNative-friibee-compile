import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import Function from './bottom-tab-bar/Function';
import RNBootSplash from "react-native-bootsplash";



export default function App() {

  const init = async () => {
    // …do multiple sync or async tasks
  };

  init().finally(async () => {
    await RNBootSplash.hide({ fade: true });
    console.log("Bootsplash has been hidden successfully");
  });
}, []);

    return (
      <>
        <Function />
        <StatusBar style="auto" />
      </>
    );
  }
