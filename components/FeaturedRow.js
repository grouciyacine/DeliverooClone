import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'
import client from '../sanity'

const FeaturedRow = ({id,title,description}) => {
const[restaurant,setRestaurant]=useState([])
  useEffect(()=>{
client.fetch(`
*[_type=="featured" && _id== $id]{
  ...,
  restaurant[]->{
    ...,
    dishes[]->,
    type->{
      name
    }
   },
   }[0]
`,{id}).then(data=>{setRestaurant(data?.restaurant)})
  },[])
  
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between  px-4'>
           <Text className='font-bold text-black text-lg'>{title}</Text>
           <ArrowRightIcon size={35} color='#00ccbb'/>   
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>
    <ScrollView
    horizontal
    contentContainerStyle={{
    paddingHorizontal:15,}}
    
    showsHorizontalScrollIndicator={false}
    className='pt-4 '
    >
        {/*resturen t card */}
        {restaurant?.map((res)=>{
        return(
            <RestaurentCard
      
 key={res.id}
 id={res.id}
 imgUrl={res.image}
 title={res.name}
 rating={res.rating}
 address={res.address}
 short_description={res.short_description}
 dishes={res.dishes}
 long={res.long}
 lat={res.lat}
 genre={res.type?.name}
 />   
        )
     
        })}
    </ScrollView>
    </View>
  )
}

export default FeaturedRow 