import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile/[id]"
        options={{
          title: "Profile",
          headerTitle: "Profile",
        }}/>
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})