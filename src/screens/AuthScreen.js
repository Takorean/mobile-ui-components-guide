import React from 'react';
import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from '../components/AuthButton';
import AuthImage from '../components/AuthImage';

function AuthScreen({navigation}){
    return (
        <SafeAreaView style={styles.fullScreen}>  
            <View style={{flex:1, alignItems:"center", marginTop:250}}>
                <Text style={[styles.bold]}>AuthScreen</Text>
            </View>
            <View style={styles.authForm}>
                <AuthButton 
                    btnTitle="Text Area"
                    btnType="google"/>
                <AuthButton 
                    btnTitle="Text Area"
                    btnType="envelope"
                    navigation={navigation}/>
                <AuthButton btnTitle="Text Area"/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen:{
        flex:1,
        alignItems:'center',
        backgroundColor:'grey'
    },
    authForm:{
        marginVertical:25,
        width:"100%",
    },
    bold:{fontFamily: 'NotoSansKR-Black', fontSize:25,}
})

export default AuthScreen
