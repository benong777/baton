import { StyleSheet, View, } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

// import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
      <View style={{ flex: 1 }}>
        <MapView style={styles.map} region={region}>
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
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#3caf50',
            },
            textInput: {
              borderWidth: 2,
              borderColor: 'orange',
              fontSize: 16,
            },
          }}
          onPress={(data, details = null) => {
            if (details && details.geometry && details.geometry.location) {
              const { lat, lng } = details.geometry.location;
              console.log('LAT type: ', typeof(lat));
              router.push({
                pathname: '/location',
                params: { lat, lng },
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
