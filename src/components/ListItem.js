import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ListItem({id, text, done}) {
    return (
        <View style={styles.container}>
            <View style={styles.circle}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        alignItems:'center'
    },
    circle:{
        width:24,
        height:24,
        borderWidth:1,
        borderRadius:12,
        borderColor:'black',
        marginRight:16
    },
    text:{
        flex:1,
        fontSize:16,
        color:'black'
    }
})
export default ListItem
