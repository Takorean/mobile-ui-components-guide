import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function AlbumItem({text, source}) {
    return (
        <View>
            <Image 
                source={source}
                style={styles.circle}/>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width:120,
        height:120,
        borderRadius:75
    }
});
export default AlbumItem;
