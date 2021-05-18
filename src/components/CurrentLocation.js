import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useSelector, useDispatch} from 'react-redux'

export default function CurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const apiKey ='AIzaSyCYCYv-9mClxXa24AqTjaPcm9qS9EW2Uuc'

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }


      Location.setGoogleApiKey(apiKey)
      let location = await Location.getCurrentPositionAsync({});
      let geocode = await Location.reverseGeocodeAsync(location.coords);
      setCurrentLocation(geocode)

    })();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {
        currentLocation?currentLocation[0].city+'/'+currentLocation[0].country:
        ''}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
  });