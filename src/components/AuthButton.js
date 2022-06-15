import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AuthButton(props) {
  return (
    <TouchableOpacity style={styles.block}>
      <View style={styles.iconWrapper} >
        <FontAwesome name={props.btnType} size={25}/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={{fontSize:16, }}>{props.btnTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        margin:10,
        marginHorizontal:25,
        backgroundColor:'white',
        borderRadius:25,
        paddingVertical:13
    },
    iconWrapper:{
      alignItems: 'center',
      justifyContent:'center',
      marginLeft:30,
    },
    textWrapper:{
      marginLeft:65,
    }
})

export default AuthButton
