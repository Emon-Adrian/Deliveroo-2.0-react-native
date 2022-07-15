/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

// eslint-disable-next-line prettier/prettier
const FeaturedRow = ({id,title,description, featuredCatergory}) => {
  return (
    <View>

    <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='text-black font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
    </View>
    <Text className='text-gray-500 px-4 text-sm'>{description}</Text>

    <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
    >   
       {/* Restaurant Cards*/}
       <RestaurantCards/>
    </ScrollView>
    </View>
  )
}

export default FeaturedRow