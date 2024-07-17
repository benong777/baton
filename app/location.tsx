import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const location = () => {
  const { lat, lng }  = useLocalSearchParams<{lat: string, lng: string}>();
  return (
    <View>
      <Text>location Lat: {lat} Lng: {lng}</Text>
    </View>
  )
}

export default location

const styles = StyleSheet.create({})