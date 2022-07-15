/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View, Text, ScrollView} from 'react-native';
import CategoryCard from './CategoryCard';


const Categories = () => {
    return (
        <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
         }}
         horizontal
         showsHorizontalScrollIndicator={false}
        >   
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Emon"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Emon"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Emon"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Emon"/>
        </ScrollView>
    );
}

export default Categories;

