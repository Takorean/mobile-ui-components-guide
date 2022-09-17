import React, { 
    useCallback, 
    useRef, 
    useMemo, 
    useState,
    useEffect
} from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    Button, 
    ActivityIndicator 
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

import axios from 'axios';

//분류 
const classification = [
    {id:1, sort:'개인'},
    {id:2, sort:'광고'},
    {id:3, sort:'알림'},
    {id:4, sort:'뉴스레터'},
]

interface ScanResult {
    index:number;
    subject:string;
    pred:number;
};

interface Result {
    result: ScanResult[]
}

//interface EmailList extends Array<ScanResult>{};

function ServerRequestScreen () {
    //state: tab menu: 개인, 광고, 알림, 뉴스레터
    //default: 개인
    const [tabState, setTabState] = useState<string>("개인");
    const [scanResult, setScanResult] = useState<Result>();

    //conditional: render data based on state
    // const emailList = scanResult.result.filter(item => (
    
    // ));

    //EventHandler
    const toggleTab = (index: string) => {
        setTabState(index);
    };

    //request data to REST API Server
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('http://10.0.2.2:2000/api/email/predict');
                //setScanResult(res.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);
    //console.log("RESULT = ",scanResult)

    return(
        <View style={{flex:1}}>
            <View style={{
                flexDirection:'row', 
                marginTop:50, 
                alignItems:'center', 
                justifyContent:'center'
                }}
            >
                {classification.map((item, index) => (
                        <TouchableOpacity 
                            key={index}
                            onPress={() => toggleTab(item.sort)} 
                            style={{
                                height:80, 
                                width:80, 
                                margin:10,
                                alignItems:'center',
                                justifyContent:'center', 
                                borderWidth:2, 
                                borderRadius:20
                            }}
                        >
                            <Text style={{color:'#000000', fontSize:20}}>{item.sort}</Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
            
        </View>
    );
};

export default ServerRequestScreen;