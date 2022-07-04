import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';
import TodoList from '../components/TodoList';
import Card from '../components/Card';

function HomeScreen () {
    //Dummy Data
    const [data, setData] = useState([
        {id:1, text:'implement authButton', done: true},
        {id:2, text:'implement FAB', done: false},
        {id:3, text:'implement BNT', done: false},
    ]);

    return (
        <View style={styles.container}>
            <Card/>            
            <TodoList data={data}/>
            <FloatingActionButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'grey'
    }
});

export default HomeScreen;
