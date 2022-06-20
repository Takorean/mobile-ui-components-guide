import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';

function TodoList({data}){
    return (
        <FlatList 
            style = {styles.container}
            data ={data}
            renderItem = {({item}) => (
                <View>
                    <ListItem id={item.id} text={item.text} done={item.done}/>
                </View>
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default TodoList
