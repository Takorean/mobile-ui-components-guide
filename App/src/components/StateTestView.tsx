import React, {useCallback, useRef, useMemo, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ActivityIndicator } from 'react-native';


interface Props {
    testHandler(test: number[]): any;
    test: number[];
};

function StateTestView({testHandler, test}: Props) {
    
    return(
        <View>
            <TouchableOpacity onPress={() => testHandler(test)}>
                <Text>test</Text>
            </TouchableOpacity>
        </View>
    );
}

export default StateTestView;