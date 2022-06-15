import { DrawerScreenProps } from '@react-navigation/drawer'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> {}

export const SettingsScreen = ({navigation}: Props) => {
  return (
    <View style={styles.settingsContainer}>
        <Text style={styles.title}>Settings</Text>
        <Button 
        onPress={() => navigation.goBack()}
        title='Go back to Tabs'
        />
    </View>
  )
}

