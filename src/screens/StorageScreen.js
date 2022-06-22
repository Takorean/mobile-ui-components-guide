import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AlbumList from '../components/AlbumList';

const profile = [
    {
        id:1,
        image: require('../assets/images/papa.png'),
        text: "papa",
    },
    {
        id:2,
        image:require('../assets/images/mama.png'),
        text:"mama"
    },
    {
        id:3,
        image:require('../assets/images/bro.png'),
        text:"bro"
    },
    {
        id:4,
        image:require('../assets/images/me.png'),
        text:"me"
    }
]

function StorageScreen() {
    return (
        <View style={styles.container}>
            <AlbumList profile={profile}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
});

export default StorageScreen;
