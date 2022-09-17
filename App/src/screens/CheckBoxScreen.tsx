import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { data } from '../data/dummy';
const dummyData = [
      { id:0, sort:'개인', title:'생활관 사무실'},
      { id:1, sort:'알림', title:'무신사'},
      { id:2, sort:'뉴스레터',title:'점핏'},
      { id:3, sort:'광고', title:'엘지'},
      { id:4, sort:'광고', title:'테슬라'},
      { id:5, sort:'광고', title:'페이스북'},
      { id:6, sort:'광고', title:'인스타'},
      { id:7, sort:'개인', title:'컴페노이드'},
      { id:8, sort:'뉴스레터', title:'쿠키'},
      { id:9, sort:'알림', title:'gmail'},
] 


function CheckBoxScreen() {
  const [toggleCheckBox, setToggleCheckBox] = useState([]);
  const [deleteEmailIndex, setDeleteEmailIndex] = useState([]);

  const temp = dummyData.map((item) => {
    return item.id
  })
  console.log(temp);

  useEffect(() => {
    setToggleCheckBox(temp)
    setDeleteEmailIndex(temp)
  },[])
  console.log(toggleCheckBox);
  const onHandleCheckBox = (newValue: boolean, dataIndex:number) => {
    if(newValue){
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setToggleCheckBox(prev => [...prev, dataIndex])
      setDeleteEmailIndex(prev => [...prev, dataIndex])
    }
    else{
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setToggleCheckBox(toggleCheckBox.filter((item) => item !== dataIndex))
      setDeleteEmailIndex(deleteEmailIndex.filter((item) => item !== dataIndex))
    }
  }
  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      {dummyData.map((item) => (
        <View key={item.id} style={{flexDirection:'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox.includes(item.id) ? true : false}
            onValueChange={(newValue) => onHandleCheckBox(newValue, item.id)}
          />
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})

export default CheckBoxScreen;