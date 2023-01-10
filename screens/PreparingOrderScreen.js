import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animtable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const PreparingOrderScreen = () => {
  const navi=useNavigation();
    useEffect(()=>{
      setTimeout(()=>{
      navi.navigate("Delivery")
      },4000)
  },[])
    return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
    <Animtable.Image
    source={require("../de.gif")}
    animation="slideInUp"
    iterationCount={1}
    className='h-40 w-40'
    />
    <Animtable.Text
    animation="slideInUp"
    iterationCount={1}
    className='text-lg  text-white font-bold text-center'
    >
        Waiting for Restaurant to accept your order
    </Animtable.Text>
    <Progress.Circle className='pt-8' size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen