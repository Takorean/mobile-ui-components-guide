import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

function CustomButton({navigation}){
  return (
    <TouchableOpacity 
        style={styles.block}
        onPress={() => {navigation.navigate('MainTab')}}>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    block:{
        alignItems:'center',
        margin:20,
        width:340,
        height:45,
        borderRadius:25,
        backgroundColor:'white',
        paddingVertical:13
    }
})

export default CustomButton
