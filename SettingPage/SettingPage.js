import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import SettingPage from './SettingPage';



export default function App() {
    return (
      <>
        <SettingPage />
        <StatusBar style="auto" />
      </>
    );
  }