/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text} from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

// eslint-disable-next-line prettier/prettier
const FeaturedRow = ({id,title,description, featuredCatergory}) => {
  return (
    <View>

    <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='text-black font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
    </View>
    <Text className='text-gray-500 px-4 text-sm'>{description}</Text>
    </View>
  )
}

export default FeaturedRow