import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';
import DrawerComponent from '../components/DrawerComponent';
import { createStackNavigator } from '@react-navigation/stack';


type Props={}

const Drawer = createDrawerNavigator();

 const Stack = createStackNavigator();

 const SettingsStackScreen = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
 }


export const  DrawerNavigationrCustom = (props: Props) => {

  const width = useWindowDimensions().width;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <DrawerComponent {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'Stack Navigation'}}  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen"   component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
}