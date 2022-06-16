import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
import StorageStack from '../stacks/StorageStack';
import MyProfileStack from '../stacks/MyProfileStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MainTab({navigation}){
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'black'
                }}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({color}) =>
                            <FontAwesome name="home" size={24} color={color}/>
                    }}/>
                <Tab.Screen
                    name="StorageStack"
                    component={StorageStack}
                    options={{
                        tabBarIcon: ({color}) =>
                            <FontAwesome name="cloud" size={24} color={color}/>

                    }}/>
                <Tab.Screen
                    name="MyProfileStack"
                    component={MyProfileStack}
                    options={{
                        tabBarIcon: ({color}) =>
                            <FontAwesome name="user" size={24} color={color}/>

                    }}/>
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default MainTab
