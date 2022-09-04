import React, {useCallback, useRef, useMemo, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ActivityIndicator } from 'react-native';

import {
  BottomSheetModal, 
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';

function BottomSheetScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  
  const snapPoints = useMemo(() => ['2%','80%'], []);
  
  //eventHandler
  const handlePresentModalPress = useCallback(() => {  
    bottomSheetModalRef.current?.present();  
  }, []);
  
  const handleSheetChanges = useCallback((index: number) => {    
    console.log('handleSheetChanges', index);  
  }, []);
  
  return (
    <BottomSheetModalProvider>      
      <View style={styles.container}>        
        <Button          
          onPress={handlePresentModalPress}          
          title="Present Modal"          
          color="black"        
        />        
        <BottomSheetModal          
          ref={bottomSheetModalRef}          
          index={1}          
          snapPoints={snapPoints}          
          onChange={handleSheetChanges}        
        >          
          <View style={styles.contentContainer}>            
            <Text>Awesome 🎉</Text>          
          </View>        
        </BottomSheetModal>      
      </View>    
    </BottomSheetModalProvider>  
  );
};

const styles = StyleSheet.create({  
  container: {    
    flex: 1,    
    padding: 24,    
    justifyContent: 'center',    
    backgroundColor: 'grey',  
  },  
  contentContainer: {    
    flex: 1,    
    alignItems: 'center',  },
});

export default BottomSheetScreen;