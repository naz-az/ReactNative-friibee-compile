import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import Notification from './NotificationPage/Notification';
import Header from './NotificationPage/Header';


export default function App() {
    return (
      <>
        <Header />
        <Notification />
        <StatusBar style="auto" />
      </>
    );
  }
