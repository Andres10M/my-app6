// navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import InstructionsScreen from '../screens/InstructionsScreen';
import PasswordGeneratorScreen from '../screens/PasswordGeneratorScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Instructions" component={InstructionsScreen} />
      <Stack.Screen name="PasswordGenerator" component={PasswordGeneratorScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
