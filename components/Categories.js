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
            <CategoryCard 
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/0e/bc/93/c6/four-star-pizza.jpg" 
            title="Emon"
            />
            <CategoryCard 
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/0e/bc/93/c6/four-star-pizza.jpg" 
            title="Emon"
            />
            <CategoryCard 
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/0e/bc/93/c6/four-star-pizza.jpg" 
            title="Emon"
            />
            <CategoryCard 
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/0e/bc/93/c6/four-star-pizza.jpg" 
            title="Emon"
            />
            <CategoryCard 
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/0e/bc/93/c6/four-star-pizza.jpg" 
            title="Emon"
            />
            <CategoryCard 
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/0e/bc/93/c6/four-star-pizza.jpg" 
            title="Emon"
            />
        </ScrollView>
    );
}

export default Categories;

