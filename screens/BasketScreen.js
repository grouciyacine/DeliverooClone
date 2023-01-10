import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketItemswithId, selectBasketTotal } from '../features/basketSlice';
import { useMemo } from 'react';
import { useState } from 'react';
import {XCircleIcon} from'react-native-heroicons/solid'
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter'
const BasketScreen = () => {
    const navigation=useNavigation();
    const restaurant=useSelector(selectRestaurant)
  const items=useSelector(selectBasketItems)
  const dispatch=useDispatch()
  const totalprice=useSelector(selectBasketTotal)
  const[groupedItemsInBasket,setGroupedItemsInBasket]=useState([])
  useMemo(()=>{
const groupedItems=items.reduce((results,item)=>{
    (results[item.id]=results[item.id] || []).push(item);
    return results;
},{});

setGroupedItemsInBasket(groupedItems);
  },[items]);
    return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
            <View>
                <Text className='text-lg font-bold text-black text-center'>Basket</Text>
                <Text className='text-center text-gray-400'>{restaurant.title}</Text>
            </View>
            <TouchableOpacity
           onPress={navigation.goBack}
            className='rounded-full absolute bg-gray-100 top-3 right-5'>
<XCircleIcon color="#00ccbb" height={50} width={50}/>
            </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
            <Image source={{
                uri:"https://links.papareact.com/wru",
                
            }}
            className="bg-gray-300 h-7 w-7 p-4 rounded-full "
            />
            <Text className='text-black flex-1'>Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className='text-[#00ccbb] '>Change</Text>
            </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
            {Object.entries(groupedItemsInBasket).map(([key,items])=>(
               
                <View key={key} className='flex-row items-center space-x-3 bg-white py-5'>
                    <Text className='text-[#00ccbb]'>{items.length} x</Text>
                    <Image source={{
                        uri:urlFor(items[0]?.image).url()
                    }}
                    className='h-12 w-12 rounded-full'
                    />
                    <Text className='flex-1'>{items[0]?.name}</Text>
                    <Text>
                      <Currency quantity={items[0]?.price} currency="USD"/> 
                    </Text>
                   <TouchableOpacity>
                    <Text
                     className='text-[#00ccbb] text-xs'
                     onPress={()=>dispatch(removeFromBasket({id:key}))}>
                       Remove
                    </Text>
                   </TouchableOpacity>
                </View>
               )
            )}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
    <Currency quantity={totalprice} currency="usd"/>
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Feet</Text>
            <Text className='text-gray-400'>
    <Currency quantity={6} currency="usd"/>
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-black'>Order Total</Text>
            <Text className='font-extrabold text-black'>
    <Currency quantity={totalprice+6} currency="usd"/>
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('PreparingOrderScreen')}} className='rounded-lg bg-[#00ccbb] p-4'>
            <Text className='text-center text-white text-lg font-bold' >Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
//2:57
export default BasketScreen