import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { router } from 'expo-router'

const CustomDrawer = (props : any) => {
  return (
    <View style={{flex: 1}}>
    <DrawerContentScrollView {...props} scrollEnabled={false}   >
      <View style={{}}>

      </View>
        <DrawerItemList {...props} />
        <DrawerItem label={'Logout'} onPress={() => router.replace('/')} />
    </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer