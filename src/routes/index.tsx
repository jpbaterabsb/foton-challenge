import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AddBookScreen } from '../screens/AddBookScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { Feather } from '@expo/vector-icons';
import { BookScreen } from '../screens/BookScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const Router: React.FC = () => {
  return (
    <NavigationContainer 
    >
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Main" component={MainRouter} />
        <Stack.Screen name="Book" component={BookRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainRouter = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
  
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Profile') {
            iconName = 'user'
          } else if (route.name === 'Add Book') {
            iconName = 'plus'
          }
  
          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#000000',
        inactiveTintColor: '#BFBEBF',
        labelStyle: {
          fontSize: 10,
          fontFamily: 'SFProDisplay',
          marginBottom: 5
        },
      }}
  
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Add Book' component={AddBookScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const BookRouter = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}
  >
    <Stack.Screen name="Detail" component={BookScreen} />
  </Stack.Navigator>
);