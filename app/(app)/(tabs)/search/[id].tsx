import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const LocationDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen
        options={{
          headerTitle: 'Location Details ' + id
        }}
      />
      <Text style={{ fontSize: 24 }}>Location Details: {id} </Text>
    </View>
  )
}

export default LocationDetails

const styles = StyleSheet.create({})