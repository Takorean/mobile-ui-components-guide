import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from 'react-native';

function Card(){
    return (
        <ScrollView style={styles.container}>
            <Text style={{color:'white'}}>Card</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:20,
        marginHorizontal:16,
        marginVertical:20,
        backgroundColor:"black",
    }
})

export default Card
