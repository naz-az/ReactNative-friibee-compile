import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Settings from './screens/Settings';



export default function App() {
    return (
      <>
        <Settings />
        <StatusBar style="auto" />
      </>
    );
  }
