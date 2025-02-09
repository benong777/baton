import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import MapView, { Marker, Region } from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar } from '@/components/Avatar';

const locationDetails = () => {
  const { id } = useLocalSearchParams();
  const { lat, lng }  = useLocalSearchParams();
  // const { lat, lng, data }  = useLocalSearchParams();
  // const dataObject = JSON.parse(data);

  const region: Region = {
    latitude: parseFloat(lat),
    longitude: parseFloat(lng),
    // latitudeDelta: 0.0922,
    // longitudeDelta: 0.0421,
    latitudeDelta: 0.0071,
    longitudeDelta: 0.0071,
  }

  const [comments, setComments] = useState(
    [
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
  );

  const lineHeight = 20;
  const [height, setHeight] = useState(40);
  const [enteredComment, setEnteredComment] = useState('');

  function inputHandler(textInput: string) {
    console.log(textInput);
    setEnteredComment(textInput);
  };

  function addCommentHandler() {
    setComments((currentComments) => [
      ...currentComments,
      {
        id: '5',
        userName: 'doom@avengers.com',
        firstName: 'Doom',
        lastName: 'Doom',
        date: 'Jan 2, 2024',
        comment: enteredComment
      },
    ]);
    console.log(comments);
  };

  // useEffect(() => {

  // }, [comments]);

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
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   {/* <Stack.Screen
    //     options={{
    //       headerTitle: 'Location Details ' + id
    //     }}
    //   /> */}
    //   <Text style={{ fontSize: 24 }}>Location Details: {id} </Text>
    // </View>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <MapView style={styles.map} region={region}>
              <Marker
                coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                // description={data}
              />
            </MapView>
          </View>
          <View style={{ flex: 5 }}>
            <View style={styles.commentInputContainer}>
              <TextInput
                style={[styles.textInput, {height: height}]}
                placeholder='Add comment'
                onChangeText={inputHandler}
                multiline={true}
                onContentSizeChange={(event) => {
                  const newHeight = event.nativeEvent.contentSize.height;
                  setHeight(Math.min(newHeight, 5 * 20)); // Limit to 5 lines (20 is approx. line height)
                }}
                // onContentSizeChange={(event) => {
                //   const contentHeight = event.nativeEvent.contentSize.height;
                //   const maxHeight = lineHeight * 5; // Limit height to 5 lines
                //   setHeight(Math.min(contentHeight, maxHeight));
                // }}
              />
              <Button 
                title='Submit'
                onPress={addCommentHandler}
              />
            </View>
            <FlatList
              style={{ marginTop: 4 }}
              data={comments}
              inverted
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

export default locationDetails

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  separator: {
    height: 8,
    backgroundColor: 'transparent'
  },
  commentText: {
    fontSize: 16,
  },
  commentInputContainer: {
    margin: 12,
    padding: 12,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray'
  },
})