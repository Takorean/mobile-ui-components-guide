import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/constants/theme';


const App = () => {
  
  console.log('계산된 높이:'+ DEVICE_HEIGHT)
  
  return (  
    <View>
      <View style={styles.box_1}>
        <Text>BOX_1</Text>
      </View>
      <View style={styles.box_2}>
        <Text>BOX_1</Text>
      </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  box_1: {
    width: DEVICE_WIDTH * 50,
    //width: '100%',
    backgroundColor:'red',
    borderWidth:3,
  },
  box_2: {
    width: DEVICE_WIDTH * 30,
    //width: '100%',
    backgroundColor:'red',
    borderWidth:3,
  }
});

export default App;
