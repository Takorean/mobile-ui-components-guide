import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthButton from '../components/AuthButton';

function AuthScreen({navigation}){
    return (
        <SafeAreaView style={styles.container}>  
            <View style={styles.textContainer}>
                <Text style={styles.bold}>AuthScreen</Text>
            </View>
            <View style={styles.authForm}>
                <AuthButton 
                    btnTitle="Button"
                    btnType="google"/>
                <AuthButton 
                    btnTitle="Button"
                    btnType="envelope"
                    navigation={navigation}/>
                <View style={styles.signinForm}>
                    <TouchableOpacity>
                        <Text style={{fontSize:20}}>Button</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'grey'
    },
    textContainer:{
        alignItems:"center", 
        marginTop:250,
    },
    authForm:{
        marginVertical:50,
        width:"100%",
    },
    signinForm:{
        alignItems:'center',
        marginVertical:15,
    },
    bold:{fontFamily: 'NotoSansKR-Black', fontSize:25,}
})

export default AuthScreen
