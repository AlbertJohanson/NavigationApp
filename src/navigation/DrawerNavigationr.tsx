import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';


type Props={}

const Drawer = createDrawerNavigator();

export const  DrawerNavigationr = (props: Props) => {

  const width = useWindowDimensions().width;

  return (
    <Drawer.Navigator
     >
      <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}