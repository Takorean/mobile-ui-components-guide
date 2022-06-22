import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumItem from './AlbumItem';

function AlbumList ({profile}) {
    const renderItem = ({item}) => (
        <AlbumItem text={item.text} source={item.image} />
    )
    return (
        <FlatList
            style={styles.container}
            data={profile}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-evenly'}}/>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});

export default AlbumList;
