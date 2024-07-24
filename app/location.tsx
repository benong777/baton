import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import MapView, { Marker, Region } from 'react-native-maps';

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
      date: 'Jan 1, 2024',
      comment: 'Full'
    },
    {
      id: '2',
      userName: 'vision@avengers.com',
      date: 'Jan 1, 2024',
      comment: 'Open'
    },
    {
      id: '3',
      userName: 'cap@avengers.com',
      date: 'Jan 1, 2024',
      comment: 'Getting busy'
    },
    {
      id: '4',
      userName: 'stark@avengers.com',
      date: 'Jan 1, 2024',
      comment: 'Packed. Turn back while you can!'
    },
  ]

  return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <MapView style={styles.map} region={region}>
              <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView>
          </View>
          <View style={{ flex: 5 }}>
            {/* {comments.map((comment) => {
                return <Text key={comment.id}>{comment.comment}</Text>
            })} */}

            <FlatList
              style={{ marginTop: 4 }}
              data={comments}
              keyExtractor={(item) => item.id}
              // renderItem={renderItem}
              renderItem={(element) => {
                return (
                  <View style={{ borderWidth: 1, borderColor: 'red' }}>
                    <Text>{element.item.comment}</Text>
                  </View>
                )
              }}
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