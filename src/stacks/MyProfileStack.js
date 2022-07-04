import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProfileScreen from '../screens/MyProfileScreen';
import SetUpScreen from '../screens/SetUpScreen';

const Stack = createNativeStackNavigator();

function MyProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MyProfileScreen' component={MyProfileScreen} options={{headerShown:false}}/>
      <Stack.Screen name='SetUpScreen' component={SetUpScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default MyProfileStack;
