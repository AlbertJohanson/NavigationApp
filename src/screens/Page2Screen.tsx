import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

type Props = {}

const Page2Screen = (props: any) => {

  const navigator = useNavigation<any>()

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>

        <Text style={styles.title}>Page 2</Text>

        <Button title='Go to page 3 ' onPress={() => navigator.navigate('Page3Screen')} />

    </View>
  )
}

export default Page2Screen