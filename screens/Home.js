import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.body}>
        <Text className="text-red-600">Emon Adrian</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    body: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#73A9AD',
    },

})