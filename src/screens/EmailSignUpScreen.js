import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInputArea from '../components/CustomInputArea';
import CustomButton from '../components/CustomButton';

function EmailSignUpScreen ({navigation}) {
    return (
        <SafeAreaView style={styles.fullScreen}>
            <View style={{}}>
                <Text style={{fontSize:36, marginVertical:45}}>EmailSignUpScreen</Text>
            </View>
            <CustomInputArea placeholder="Placeholder"/>
            <CustomInputArea placeholder="Placeholder"/>
            <CustomButton navigation={navigation}/>
            
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
