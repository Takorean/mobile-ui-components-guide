import React, {useCallback, useRef, useMemo, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axios from 'axios';

const dummyData = {
    sorts:[
        {id:1, sort:'개인'},
        {id:2, sort:'광고'},
        {id:3, sort:'알림'},
        {id:4, sort:'뉴스레터'},
    ],
    email:[
        {
            id:1,
            sort:'개인',
            title:'생활관 사무실'
        },
        {
            id:2,
            sort:'알림',
            title:'무신사'
        },
        {
            id:3,
            sort:'뉴스레터',
            title:'점핏'
        },
        {
            id:4,
            sort:'광고',
            title:'엘지'
        },
        {
            id:5,
            sort:'광고',
            title:'테슬라'
        },
        {
            id:6,
            sort:'광고',
            title:'페이스북'
        },
        {
            id:7,
            sort:'광고',
            title:'인스타'
        },
        {
            id:8,
            sort:'개인',
            title:'컴페노이드'
        },
        {
            id:9,
            sort:'뉴스레터',
            title:'쿠키'
        },
        {
            id:10,
            sort:'알림',
            title:'gmail'
        },
    ] 
};

const test = {
    result :{
        0: {
            title:'a',
        },
        1: {
            title:'b',
        },
        2: {
            title:'c',
        }
    }
}

function TabScreen () {
    const [tabState, setTabState] = useState<string>("개인");
    const [checkboxState, setCheckboxState] = useState(true);

    const emailList = dummyData.email.filter(item => (
        item.sort === tabState
    ));

    console.log(emailList);

    const toggleTab = (index: string) => {
        setTabState(index);
    };

    return(
        <View>
            <View style={{
                flexDirection:'row', 
                marginTop:50, 
                alignItems:'center', 
                justifyContent:'center'
                }}
            >
                {dummyData.sorts.map((item, index) => (
                        <TouchableOpacity 
                            key={index}
                            onPress={() => toggleTab(item.sort)} 
                            style={{margin:15, borderWidth:3, borderRadius:20}}
                        >
                            <Text style={{color:'#000000', fontSize:30}}>{item.sort}</Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                {emailList.map((item, index) => (
                    <View key={index} style={{flexDirection:'row'}}>
                        <View>
                            <BouncyCheckbox
                                isChecked={checkboxState}
                                onPress={() => setCheckboxState(false)}
                                iconStyle={{borderColor:'lightgrey', borderRadius:0,}}
                                fillColor="green"
                            />
                        </View>
                        <Text style={{color:'#000000', fontSize:30}}>{item.title}</Text>
                    </View>
                ))}
            </View>
            <View>

            </View>
        </View>
    );
};

export default TabScreen;