import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import Function from './bottom-tab-bar/Function';
import RNBootSplash from "react-native-bootsplash";



export default function App() {

    return (
      <>
        <Function />
        <StatusBar style="auto" />
      </>
    );
  }
