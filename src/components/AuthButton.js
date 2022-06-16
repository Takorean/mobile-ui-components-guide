import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function AuthButton({btnTitle, btnType, navigation}) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => {navigation.navigate('EmailSignUpScreen')}}>
      <View style={styles.iconContainer} >
        <FontAwesome name={btnType} size={25}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize:20, }}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        margin:10,
        marginHorizontal:25,
        backgroundColor:'white',
        borderRadius:25,
        paddingVertical:13
    },
    iconContainer:{
      alignItems: 'center',
      justifyContent:'center',
      marginLeft:30,
    },
    textContainer:{
      marginLeft:95,
    }
})

export default AuthButton
