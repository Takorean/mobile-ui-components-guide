import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from '../components/AuthButton';
import CustomInputArea from '../components/CustomInputArea';

function EmailSignUpScreen ({navigation}) {
    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={{}}>
                <Text style={{fontSize:36, marginVertical:35}}>EmailSignUpScreen</Text>
            </View>
            <CustomInputArea placeholder="Enter your Email"/>
            <CustomInputArea placeholder="Enter your Password"/>
            <AuthButton btnTitle="Register"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullScreen:{
        flex:1,
        alignItems:'center',
        backgroundColor:'grey'

    }
})

export default EmailSignUpScreen
