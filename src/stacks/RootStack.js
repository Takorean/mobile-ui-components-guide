import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import EmailSignUpScreen from '../screens/EmailSignUpScreen';
import MainTab from '../screens/MainTab';

const Stack = createNativeStackNavigator();

function RootStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthScreen  " component={AuthScreen} options={{headerShown:false}}/>
      <Stack.Screen name="EmailSignUpScreen" component={EmailSignUpScreen} options={{headerShown:false}}/>
      <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default RootStack
