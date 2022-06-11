import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerNavigationrCustom } from './src/navigation/DrawerNavigationrCustom';
// import {SafeAreaView, Text} from 'react-native';
// import { StackNavigator } from './src/navigation/StackNavigator';
// import { DrawerNavigationr } from './src/navigation/DrawerNavigationr';

type Props = {};

const App = (props: Props) => {
  return (
      <NavigationContainer>
          {/* <StackNavigator /> */}
          {/* <DrawerNavigationr /> */}
          <DrawerNavigationrCustom/>
      </NavigationContainer>
  );
};

export default App;
