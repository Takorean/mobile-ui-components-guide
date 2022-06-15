import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AuthButton({btnTitle, btnType, navigation}) {
  return (
    <TouchableOpacity 
      style={styles.block}
      onPress={() => {navigation.navigate('EmailSignUpScreen')}}>
      <View style={styles.iconWrapper} >
        <FontAwesome name={btnType} size={25}/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={{fontSize:16, }}>{btnTitle}</Text>
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
      marginLeft:95,
    }
})

export default AuthButton
