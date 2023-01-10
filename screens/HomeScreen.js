import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View,Text, SafeAreaView,Image, TextInput, ScrollView } from 'react-native'
//import {ChvronDownIcon,UserIcon} from 'react-native-heroicons/outline'
import { ChevronDownIcon,UserIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import client from '../sanity'

const HomeScreen = () => {
 const navigation=useNavigation();
 const[featuredCategory,setFeaturedCategory]=useState([])
 useLayoutEffect(()=>{
navigation.setOptions({
  headerShown:false,
  
})
},[])
useEffect(()=>{
  client.fetch(`
  *[_type=="featured"]{
    ...,
    restaurant[]->{
      ...,
      dishes[]->,
  
    }
    
  }`).then(data=>{
    setFeaturedCategory(data)
  })
},[])
return (
<SafeAreaView  className="bg-white pt-5"> 
{/*header */}
<View className='flex-row pb-3 items-center mx-4 space-x-2 px-0'>
<Image source={{
uri:'https://links.papareact.com/wru'
}} 

className='h-10 w-10 bg-gray-300 p-4 rounded-full' />
<View  className="flex-1">
<Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
<Text className='font-bold text-xl text-black'>Current Location 
<ChevronDownIcon size={20} color='#00CCBB' />
</Text> 
</View>
<UserIcon  size={35} color='#00ccbb'/>
</View>
{/* Search*/}
<View className="flex-row items-center space-x-2 pb-2 mx-4 ">
<View className='flex-row items-center space-x-2  bg-gray-200 flex-1 '>
<MagnifyingGlassIcon  size={20} color="gray"/>
<TextInput placeholder='Resturants and cuisines'
keyboardType='default'/>
</View>
<AdjustmentsVerticalIcon size={20} color="#00ccbb"/>
</View>
{/*body */}
<ScrollView className="bg-gray-100  "
contentContainerStyle={{
  paddingBottom:100,
}}> 
<Categories/>
{featuredCategory?.map((cat)=>{
return(
<FeaturedRow

key={cat._id}
id={cat._id}
title={cat.name}
description={cat.short_description}
/>
)

})}

</ScrollView>
</SafeAreaView>
)}

export default HomeScreen