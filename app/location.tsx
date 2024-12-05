import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import MapView, { Marker, Region } from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar } from '@/components/Avatar';

const location = () => {
  const { lat, lng }  = useLocalSearchParams();

  const region: Region = {
    latitude: parseFloat(lat),
    longitude: parseFloat(lng),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const comments = [
    {
      id: '1',
      userName: 'thor@avengers.com',
      firstName: 'Thor',
      lastName: 'Thunder',
      date: 'Jan 1, 2024',
      comment: 'Full'
    },
    {
      id: '2',
      userName: 'vision@avengers.com',
      firstName: 'Vision',
      lastName: 'Vis',
      date: 'Jan 1, 2024',
      comment: 'Open'
    },
    {
      id: '3',
      userName: 'cap@avengers.com',
      firstName: 'Captain',
      lastName: 'America',
      date: 'Jan 1, 2024',
      comment: 'Getting busy'
    },
    {
      id: '4',
      userName: 'stark@avengers.com',
      firstName: 'John',
      lastName: 'Stark',
      date: 'Jan 1, 2024',
      comment: 'Packed. Turn back while you can! Packed. Turn back while you can!'
    },
  ]

  const renderItem = ({item}) => {
    return (
      <>
        <View style={{ flex: 1, flexDirection: 'row', padding: 8 }}>
          <View style={{ }}>
            <Avatar name={`${item.firstName} ${item.lastName}`} size={28} />
          </View>
          <View style={{ flex: 1, marginHorizontal: 8, }}>
            <View style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 8, }}>
              <Text style={{ paddingVertical: 6, paddingHorizontal: 8 }}>{item.comment}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8, marginVertical: 4, }}>
              <Text style={{ fontSize: 12, }}>{item.date}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ fontSize: 12 }}>Like</Text>
                {/* <Ionicons name='heart-outline' size={16} color='red' /> */}
                <Text style={{ marginLeft: 12, fontSize: 12 }}>Reply</Text>
              </View>
            </View>

          </View>
        </View>
      </>
    )
  }

  return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <MapView style={styles.map} region={region}>
              <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView>
          </View>
          <View style={{ flex: 5 }}>
            <FlatList
              style={{ marginTop: 4 }}
              data={comments}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              ListFooterComponent={() => <View style={styles.separator} />}
              ListHeaderComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
  )
}

export default location

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  separator: {
    height: 8,
    backgroundColor: 'transparent'
  }
})