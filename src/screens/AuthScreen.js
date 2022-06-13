import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from '../components/AuthButton';
import AuthImage from '../components/AuthImage';

function AuthScreen(){
    return (
        <SafeAreaView style={styles.fullScreen}>
            <AuthImage/>
            <View style={styles.authForm}>
                <AuthButton title="SignUp with in Google"/>
                <AuthButton title="SignUp with in Email"/>
                <AuthButton title="SignIn"/>
            </View>
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
