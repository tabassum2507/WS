import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CheckIn from '../assets/images/icon-check-in.svg'
import Checkout from '../assets/images/icon-check-out.svg'
import { Link } from 'expo-router'

const CheckoutCard = () => {
  return (
    <View style={styles.pendingSection}>
      <View style={styles.checkin}>
        <Text style={{fontFamily : "PoppinsRegular", color : "grey", marginTop : 5, marginLeft : 10}}>Meeting Name</Text>
        <View style={styles.textSection}>
        <CheckIn width={50} height={40} /> 
        <Text style={{fontFamily : "PoppinsRegular", color : "grey"}}>Check In : 22 June 2024 9:00 am</Text>
        </View>
       

      </View>

      <View style={styles.checkout}>
        <Checkout width={150} height={50} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pendingSection: {
    width: 350,
    height: 85,
    borderRadius : 10,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,  // This is for Android
    backgroundColor: "#fff", // Make sure the background color is set
  },
  
  textSection : {
    flexDirection : "row",
    alignItems : "center"
  },
  checkin: {
    flex: 0.8, // 60%
    backgroundColor: "#fff",
  },
  checkout: {
    flex: 0.2, // 40%
    backgroundColor: "#F9BA3D",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius : 15,
    borderBottomRightRadius : 15
    
  },
});


export default CheckoutCard