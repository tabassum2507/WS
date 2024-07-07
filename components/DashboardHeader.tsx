import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const DashboardHeader = () => {
  return (
    <View>
      <Image source={require('../assets/images/Logo.png')} style={styles.logoStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
    logoStyle : {
        width: 170,
        height: 30
    }
})

export default DashboardHeader