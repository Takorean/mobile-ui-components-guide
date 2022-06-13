import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

function AuthButton(props) {
  return (
    <TouchableOpacity style={styles.block}>
      <Text style={{fontSize:16}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    block:{
        alignItems:'center',
        margin:10,
        backgroundColor:'white',
    }
})

export default AuthButton
