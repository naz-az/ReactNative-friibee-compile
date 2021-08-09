import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Notification from './Notification';
import Header from './Header';


export default function App() {
    return (
      <>
        <Header />
        <Notification />
        <StatusBar style="auto" />
      </>
    );
  }
