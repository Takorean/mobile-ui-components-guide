import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native'

function CustomInputArea (props) {
    return (
        <View style={{
            marginVertical:10, 
            paddingHorizontal:35,   
            width:'100%'}}>
            <TextInput 
                placeholder={props.placeholder} 
                style={{paddingVertical:5, borderColor:'black', borderWidth:1, borderRadius:20,}}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CustomInputArea
