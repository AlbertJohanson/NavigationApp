import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Tab3Screen = () => {


  useEffect(() => {
    console.log('Tab3Screen')
  }, [])

  return (
    <View>
        <Text style={styles.title}>Tab 3 Screen</Text>
    </View>
  )
}
