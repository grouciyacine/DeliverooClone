import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { urlFor } from '../sanity'
import { MinusCircleIcon } from 'react-native-heroicons/solid'
import { PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket,removeFromBasket,selectBasketItems, selectBasketItemswithId } from '../features/basketSlice'
const DishRow = ({id,name,description,price,image}) => {
  const[isPressed,setIsPressed]=useState(false)
  const dispatch=useDispatch()
  const items=useSelector((state)=>selectBasketItemswithId(state,id))
  const handlepress=()=>{
dispatch(addToBasket({id,name,description,price,image}))
  }
  const removeItemFromBasket=()=>{
    if(!items.length>0) return;

    dispatch(removeFromBasket({id}))
  }
  
    return (
    <>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}> 
      <View className='flex-row'>
       <View className='flex-1 pr-2'>
           <Text className='text-lg mb-1'>{name}</Text> 
       <Text className='text-gray-400'>{description}</Text>
      <Text>
        <Currency quantity={price} currency="USD"/>
    </Text>
       </View> 
    <View >
    <Image style={{
        borderWidth:1,
        borderColor:"#f3f3f4"
    }} source={{uri:urlFor(image).url()}}
    className='h-20 w-20 bg-gray-300 p-4'
    />

    
</View>
      </View>

    </TouchableOpacity>
    {isPressed && (
        <View className='bg-white px-4'>
            <View className='flex-row items-center pb-3'>
                <TouchableOpacity 
                disabled={!items.length}
                >
                    <MinusCircleIcon
                   
                    onPress={removeItemFromBasket}
                    color={items.length>0 ? "#00ccbb":"gray"}
                    size={40} />
                </TouchableOpacity>
                <Text className='text-black text-lg'>{items.length}</Text>
                <TouchableOpacity>
                    <PlusCircleIcon
                    onPress={handlepress}
                    size={40}
                    color='#00ccbb'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
    
  )
}

export default DishRow