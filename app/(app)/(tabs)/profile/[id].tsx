import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '../../../../components/context/authContext';
import { useLocalSearchParams } from 'expo-router'
import { handleLogout } from '../../../../functions/handleLogout'

const Profile = () => {
  const { logout, user } = useAuth();
  const {id} = useLocalSearchParams();

  // const handleLogout = async () => {
  //   await logout();
  // };

  return (
    <View>
      <Text>userId: {user.email}</Text>
      <Text>Username: {id}</Text>
      <Pressable onPress={() => handleLogout(logout)}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})