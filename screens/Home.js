/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const Home = ({navigation}) => {
 
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
  },[])
  
  return (
    <SafeAreaView className='bg-white pt-5 '>

        {/* Header */}

        <View className='flex-row pb-3 items-center mx-1 space-x-2 px-4'>
          <Image
            source={{
              uri:'https://links.papareact.com/wru'
            }}
            className='h-7 w-7 bg-slate-300 p-4 rounded-full'
          />
          <View className='flex-1'>
            <Text className='font-bold text-xs text-gray-400'>
              Deliver Now!
              </Text>
            <Text className='font-bold text-xl text-slate-900'>
              Current Location
             <ChevronDownIcon size={20} color='#00CCBB'/>
            </Text>
          </View>
          <UserIcon size={35} color='#00CCBB'/>
        </View>
        {/* Search future */}

        <View className='flex-row items-center space-x-2 p-2 mx-1 px-4'>
          <View className='flex-row flex-1 space-x-2 items-center rounded-sm h-full bg-gray-200 p-1'>
             <SearchIcon size={20} color='gray'/>
             <TextInput placeholder="Restaurants & coisines"
              placeholderTextColor="gray"
              className='text-gray-700'
              keyboardType="default"
             />
          </View>
           <AdjustmentsIcon size={20} color='#00CCBB'/>
        </View>
        
        {/* Body */}

        <ScrollView
         className='bg-gray-100'
         contentContainerStyle={{
          paddingBottom: 100,
         }}
        >
            <Categories/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

// export const styles = StyleSheet.create({
//   header:{
//     flex:1,
//   }
// })