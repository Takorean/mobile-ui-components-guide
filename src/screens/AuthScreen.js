import React from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from '../components/AuthButton';
import AuthImage from '../components/AuthImage';

function AuthScreen(){
    return (
        <SafeAreaView style={styles.fullScreen}>
            <ImageBackground 
                style={{flex:1,width:"100%", }} 
                source={require('../assets/images/parents.jpg')}
                blurRadius={3}>  
                <View style={{flex:1, alignItems:"center", marginTop:370}}>
                    <Text>가족들의 모든 일상을 저장하세요</Text>
                </View>
                <View style={styles.authForm}>
                    <AuthButton title="SignUp with in Google"/>
                    <AuthButton title="SignUp with in Email"/>
                    <AuthButton title="SignIn"/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen:{
        flex:1,
        alignItems:'center',
        backgroundColor:'yellow'
    },
    authForm:{
        marginVertical:25,
        width:"100%",
    }
})

export default AuthScreen
