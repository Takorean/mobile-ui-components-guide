import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';

function HomeScreen () {
    return (
        <View style={styles.container}>
            <FloatingActionButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default HomeScreen;
