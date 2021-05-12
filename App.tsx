import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { Router } from './src/routes';
import AppLoading from 'expo-app-loading';



export default function App() {

  const [loaded] = useFonts({
    SFProDisplay: require('./assets/fonts/SFProDisplay-Regular.ttf'),
    SFProBold: require('./assets/fonts/SFProDisplay-Bold.ttf'),
    SFProText: require('./assets/fonts/SFProText-Regular.ttf'),
  });

  if(!loaded) {
    return <AppLoading />
  }


  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
