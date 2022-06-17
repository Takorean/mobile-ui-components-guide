import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingActionButton (){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Icon name="forum" size={24} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        right:36,
        width:56,
        bottom:16
    },
    button:{
        width:56,
        height:56,
        backgroundColor:'black',
        borderRadius:28,
        justifyContent:'center',
        alignItems:"center"
    },
    icon:{
        color:"white"
    }
});

export default FloatingActionButton
