import React, { useEffect, useState } from 'react'
import { View,Text, ScrollView, Image } from 'react-native'
import client, { urlFor } from '../sanity'
import CategoryCard from './CategoryCard'
const Categories = () => {
 const [categories,setCatergoies]=useState([])
  useEffect(()=>{
   client.fetch(`
   *[_type =="category"]
   `).then((data)=>{setCatergoies(data)})
  },[])
  
  return (
   
        <ScrollView
        contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
      }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        
        {
          
          categories.map((cat)=>{
          return(
            <CategoryCard 
            key={cat._id}
          imgUrl={urlFor(cat.image).width(200).url()}
           title={cat.name}/> 
          )
             
          })
        }
         
              
    </ScrollView>
  )
}

export default Categories