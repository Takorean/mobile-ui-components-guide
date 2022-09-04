import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { data } from '../data/dummy';

function CheckBoxScreen() {
  const [toggleCheckBox, setToggleCheckBox] = useState(true);

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      {data.map((item) => (
        <View key={item.id} style={{flexDirection:'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text>{item.category}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})

export default CheckBoxScreen;