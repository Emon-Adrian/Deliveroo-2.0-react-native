/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, Text} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
 
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    
  );
};

export default App;

