import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {}
const Page3Screen = ({navigation}: Props) => {


  return (
    <View style={styles.globalMargin}>


        <Text style={styles.title}>Page 3</Text>

        <Button title='Back ' onPress={() => navigation.pop()} />

        <Button  title='Go to Home ' onPress={() => navigation.popToTop()} />
    </View>
  )
}

export default Page3Screen