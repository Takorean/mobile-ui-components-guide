import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/stacks/RootStack';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (  
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>    
    </GestureHandlerRootView>
  );
};

export default App;
