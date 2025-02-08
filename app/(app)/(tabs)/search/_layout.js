import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index'
        options={{
          title: 'Search',
          // headerShown: false,
        }}
      />
      <Stack.Screen name='[id]'
        options={{
          title: 'Location Details',
          // headerShown: false,
        }}
      />
    </Stack>
  )
}

export default _layout