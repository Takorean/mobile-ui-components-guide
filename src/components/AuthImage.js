import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

function AuthImage(){
  return (
    <ImageBackground style={{flex:1,width:"100%",}} source={require('../assets/images/family.jpg')}>  
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    
})

export default AuthImage
