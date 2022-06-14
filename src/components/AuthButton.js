import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

function AuthButton(props) {
  return (
    <TouchableOpacity style={styles.block}>
      <Text style={{fontSize:16, }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    block:{
        alignItems:'center',
        height:50,
        margin:10,
        marginHorizontal:25,
        backgroundColor:'white',
        borderRadius:25
    }
})

export default AuthButton
