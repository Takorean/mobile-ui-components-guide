import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

function AuthImage(){
  return (
    <View style={styles.block}>  
      <Text>AuthImage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    block:{
        flex:1,
        backgroundColor:'grey',
        width:"100%"
    }
})

export default AuthImage
