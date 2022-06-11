import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {}

const DrawerComponent = ({navigation}: DrawerContentComponentProps) => {
  return (
        <DrawerContentScrollView>
            {/* Avatar Container */}
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
                }}
                style={styles.avatar}
                />
            </View>

            {/* Option menu*/}
            <View style={styles.MenuContainer}>
                <TouchableOpacity
                 onPress={() => navigation.navigate('StackNavigator')}
                 style={styles.menuBtn}
                 >
                    <Text style={styles.menuItem}>
                        Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('SettingsScreen')}
                style={styles.menuBtn}
                >
                    <Text style={styles.menuItem}>
                        Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
  )
}

export default DrawerComponent

