import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import {TailwindProvider} from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import {Provider}from 'react-redux'
import { store } from './store'
import BasketScreen from './screens/BasketScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import Delivery from './screens/Delivery'
const Stack=createNativeStackNavigator()
const App = () => {
  return (
<NavigationContainer>
  <Provider store={store}>
 <TailwindProvider>
<Stack.Navigator>
<Stack.Screen name='Home' component={HomeScreen}/>
<Stack.Screen name='Restaurant' component={RestaurantScreen}/>
<Stack.Screen name="Basket" component={BasketScreen}
options={{presentation:"modal",headerShown:false}}
/>
<Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen}
options={{presentation:'fullScreenModal',headerShown:false}}/>

<Stack.Screen name='Delivery' component={Delivery}
options={{presentation:'fullScreenModal',headerShown:false}}/>
</Stack.Navigator>
</TailwindProvider> 
</Provider>
</NavigationContainer>
 


 
  )
 
}

export default App
