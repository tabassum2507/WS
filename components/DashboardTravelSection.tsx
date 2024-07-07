import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const DashboardTravelSection = () => {
  return (
    <View style={styles.section}>
      <Image source={require('../assets/images/checkin-bg.png')} style={styles.tracker} />
        <Image source={require('../assets/images/expense-bg.png')} style={styles.tracker} />
    </View>
  )
}

const styles = StyleSheet.create({
    section : {
        flex : 0.3,
        flexDirection : "row",
        paddingTop : 30
    },
    tracker : {
        height: 270,
        width : 200
    }
})

export default DashboardTravelSection