import { DrawerScreenProps } from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}



const Page1Screen = ({navigation}: any) => {


  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button 
          title="Menu"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      {/* <Button title="Go person" onPress={() => navigation.navigate('PersonScreen')} /> */}

      <Text style={{...styles.title, marginTop: 20}}>
        Navigate with Arguments
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigBtn, backgroundColor: '#00fe69'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.bigBtnText}>Pedro </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.bigBtn, backgroundColor: '#fea00a'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Albert',
            })
          }>
          <Text style={styles.bigBtnText}>Albert </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
