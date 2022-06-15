import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Tab2Screen = () => {


  useEffect(() => {
    console.log('Tab2Screen')
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text style={styles.title}>Tab 2 Screen</Text>
    </View>
  )
}
