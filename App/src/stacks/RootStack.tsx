import React, {useEffect, useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import CheckBoxScreen from '../screens/CheckBoxScreen';
import BottomSheetScreen from '../screens/BottomSheetScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="CheckBox" component={CheckBoxScreen} options={{headerShown:false}}/>
            <Stack.Screen name="BottomSheet" component={BottomSheetScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default RootStack;