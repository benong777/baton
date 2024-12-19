import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Profile = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Profile ID: {id}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})