import { View,Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { ChevronRightIcon, MapIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation=useNavigation(); 
  const dispatch=useDispatch()
    const {
params:{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    },
}=useRoute()
useLayoutEffect(()=>{
navigation.setOptions({
    headerShown :false,
})

},[])
useEffect(()=>{
dispatch(setRestaurant({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}))
},[dispatch])
  return (
    <>
    <BasketIcon/>
    <ScrollView>
      <View>
        <Image
        source={{uri:urlFor(imgUrl).url()}}
        className='w-full h-56 bg-gray-300 p-4'
        />
        <TouchableOpacity onPress={navigation.goBack} className='absolute top-3 left-5 bg-gray-100 p-2 rounded-full '>
            <ArrowLeftIcon size={20}  color="#00ccbb"/>
        </TouchableOpacity>
        <View className='bg-white '>
       <View className='px-4 pt-4 '>
        <Text className="text-3xl font-bold text-black">
{title}
        </Text>
        <View className='flex-row space-x-2 my-1'>
          <View className='flex-row items-center space-x-1'>
            <StarIcon size={23} opacity={0.5} color="green"/>
          
            <Text className="text-xs text-gray-500  ">
                <Text className="text-green-500  ">
                     {rating}
                </Text>
               . {genre}
            </Text>
          </View>
          <View className='flex-row items-center space-x-1 '>
            <MapPinIcon size={23} opacity={0.5} color="gray"/>
            <Text className="text-xs text-gray-500  ">NearBy {address}</Text>
          </View>
        </View>
        <Text className='text-gray-500 pb-4 mt-2'>{short_description}</Text>
       </View>
      <TouchableOpacity className='flex-row items-center  space-x-2 border-y border-gray-300 pt-2 pb-2'>
        <QuestionMarkCircleIcon size={23} color='gray' opacity={0.6}/>
        <Text className='pl-2 flex-1 text-xs font-bold'>Have a Food Allergy?</Text>
        <ChevronRightIcon color='#00ccbb'/>
      </TouchableOpacity>
        </View>
        <View className='pb-36'>
          <Text className='px-4 mb-3 font-bold text-lg text-black'>
            Menu 
          </Text>
          {dishes.map(dish=>{
            return(
              <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
              />
            )
          })}
        </View>
      </View>
    </ScrollView>
    </>
    
  )
}

export default RestaurantScreen