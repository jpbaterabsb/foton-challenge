import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Router } from './src/routes';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Node of type rule not supported as an inline style']); // Ignore log notification by message



export default function App() {

  const [loaded] = useFonts({
    SFProDisplay: require('./assets/fonts/SFProDisplay-Regular.ttf'),
    SFProBold: require('./assets/fonts/SFProDisplay-Bold.ttf'),
    SFProText: require('./assets/fonts/SFProText-Regular.ttf'),
    SFProTextBold: require('./assets/fonts/SFProText-Bold.ttf'),
  });

  if(!loaded) {
    return <AppLoading />
  }


  return (
    <Router />
  );
}