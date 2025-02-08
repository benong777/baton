import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useAuth } from '../../../../components/context/authContext';
import { handleLogout } from '../../../../functions/handleLogout';
import { Link, router } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';

export default function Search() {
  const { logout, user } = useAuth();
  console.log('User: ', user);
  console.log('User ID: ', user.email);

  // const handleLogout = async () => {
  //   await logout();
  // }

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
    latitudeDelta: 0.0221,
    longitudeDelta: 0.0221,
  });

  return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MapView
            style={styles.map}
            region={region}
            // mapType='mutedStandard'
          >
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          </MapView>

          <GooglePlacesAutocomplete
            placeholder="Search"
            debounce={400}
            minLength={2}
            nearbyPlacesAPI='GooglePlacesSearch'
            enablePoweredByContainer={false}
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            GooglePlacesSearchQuery={{ rankby: 'distance' }}
            // currentLocation={true}            // Needed to get current location
            query={{
              key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
              language: 'en',
              types:  'establishment',        // parks?
              radius: 30000,
            }}
            styles={{
              container: styles.autocompleteContainer,
              description: {                  // List of results
                color: '#000',
                fontSize: 14,
              },
              // predefinedPlacesDescription: {
              //   color: '#3caf50',
              // },
              textInput: {
                borderRadius: 24,
                fontSize: 16,
                margin: 16,
              },
            }}
            onPress={(data, details = null) => {
              if (details) {
                const { lat, lng } = details.geometry.location;
                // console.log('LAT type: ', typeof(lat));
                // console.log('Data:', data.structured_formatting.main_text);
                console.log('Data:', data);
                console.log(details);
                router.push({
                  pathname: '/search/1',
                  params: { lat, lng },
                  // params: { lat, lng, data: JSON.stringify(data.structured_formatting.main_text) },
                })
              } else {
                // Handle the case where details or location is null
                console.warn('Location details are missing (null)');
              }
            }}
            fetchDetails={true}
            onFail={error => console.log(error)}
            onNotFound={() => console.log('no results')}
            // listEmptyComponent={() => (
            //   <View style={{flex: 1}}>
            //     <Text>No results were found</Text>
            //   </View>
            // )}
          />

        </View>
        
        <View style={{ }}>
          <Link href="/profile/1">Go to profile 1</Link>
          {/* <Link 
            href={{
              pathname: '/profile/[id]',
              params: {id: user.userId }
            }}
          >
            Go to profile 1: {user.userId}
          </Link> */}
          <Pressable onPress={() => {
            router.push({
              // pathname: '/profile/[id]',
              pathname: '/profile/[id]',
              params: { id: user.userId }
            })
          }}>
            <Text>Go to Profile 2</Text>
          </Pressable>
          <Pressable onPress={() => handleLogout(logout)}>
            <Text>Sign Out</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  textInputContainer: {
    width: '100%',
    position: 'absolute',
    top: 50,
    zIndex: 1,
  },
  // textInput: {
  //   height: 44,
  //   color: '#5d5d5d',
  //   fontSize: 16,
  // },
  listView: {
    backgroundColor: 'white',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
