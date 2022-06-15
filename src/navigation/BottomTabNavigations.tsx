import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabNavigationsIOS />
  ) : (
    <BottomTabNavigationsAndroid />
  );
};

//Android material bottom tab navigator
const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabNavigationsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        headerShown: false,
        screenBackgroundColor: '#fff',
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home';
              break;
            case 'TopTabNavigator':
              iconName = 'arrow-up';
              break;
            case 'StackNavigator':
              iconName = 'settings';
              break;

            default:
              iconName = 'home';
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="TopTabNavigator"
        options={{title: 'Top Tab'}}
        component={TopTabNavigator}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

//IOS bottom tab navigator
const TabIOS = createBottomTabNavigator();

const BottomTabNavigationsIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home';
              break;
            case 'TopTabNavigator':
              iconName = 'arrow-up';
              break;
            case 'StackNavigator':
              iconName = 'settings';
              break;

            default:
              iconName = 'home';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      {/* tabBarIcon: (props) => <Text style={{color: props.color, fontSize: 16}}>T1</Text> */}
      <TabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="TopTabNavigator"
        options={{title: 'Top Tap'}}
        component={TopTabNavigator}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};
