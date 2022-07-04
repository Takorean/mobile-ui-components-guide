import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function MyProfileScreen() {
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    
    return (
        <Provider>
            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    style={{position:'absolute', bottom:50}}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}>
                    <Menu.Item onPress={() => navigation.navigate('SetUpScreen')} title="질문 올리기" />
                    <Menu.Item onPress={() => {}} title="일상 올리기" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({})

export default MyProfileScreen;