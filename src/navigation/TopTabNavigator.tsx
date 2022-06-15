import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {AlbumScreen} from '../screens/AlbumScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string;

          switch (route.name) {
            case 'Chat':
              iconName = 'Ch';
              break;
            case 'Album':
              iconName = 'Co';
              break;
            case 'Contact':
              iconName = 'Al';
              break;

            default:
              iconName = 'home';
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};
