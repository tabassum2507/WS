import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CheckoutCard from './CheckoutCard'

const DashboardPendingList = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "PoppinsSemiBold", marginBottom : 10, fontSize: 18}}>Pending Check Out</Text>
      <CheckoutCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    paddingTop : 80
  }
})

export default DashboardPendingList