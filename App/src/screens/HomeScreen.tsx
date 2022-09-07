import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../stacks/types';

import { DEVICE_HEIGHT, DEVICE_WIDTH} from '../constants/theme';

function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>()
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.index} onPress={()=>navigation.navigate('CheckBox')}>
        <Text>SHOW CHECKBOX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.index} onPress={()=>navigation.navigate('BottomSheet')}>
        <Text>SHOW BOTTOMSHEET</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.index} onPress={()=>navigation.navigate('Tab')}>
        <Text>SHOW Tab</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  index:{
    marginVertical:DEVICE_HEIGHT * 3,
    paddingHorizontal: DEVICE_WIDTH * 4,
    borderRadius:10,
    borderWidth:2,
  }
})

export default HomeScreen;