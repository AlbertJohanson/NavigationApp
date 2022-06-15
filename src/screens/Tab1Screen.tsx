import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { colors, styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex:1, justifyContent:'center', alignContent: 'center', alignItems: 'center', paddingTop: top}}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
            <Icon name="home" size={30} color={colors.primary} />
            <Icon name="planet" size={30} color={colors.primary} />
            <Icon name="arrow-down-circle" size={30} color={colors.primary} />
        </Text>
    </View>
  )
}
