import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const busStations = [
  {
    id: 1,
    coordinate: { latitude: 21.0275, longitude: 105.784 },
    name: 'khu vực 1',
  },
  {
    id: 2,
    coordinate: { latitude: 21.0295, longitude: 105.7855 },
    name: 'khu vực 2',
  },
  {
    id: 3,
    coordinate: { latitude: 21.0275, longitude: 105.787 },
    name: 'khu vực 3',
  },
];
const RADIUS = 200;

const haversineDistance = (
  coords1: { latitude: number; longitude: number },
  coords2: { latitude: number; longitude: number },
) => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371e3; // Đường kính Trái Đất (mét)

  const lat1 = toRad(coords1.latitude);
  const lat2 = toRad(coords2.latitude);
  const deltaLat = toRad(coords2.latitude - coords1.latitude);
  const deltaLon = toRad(coords2.longitude - coords1.longitude);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};
const HomeScreen = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [inArea, setInArea] = useState(false);

  const getUsersCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Quyền truy cập bị từ chối',
        'Quyền truy cập vị trí đã bị từ chối.',
      );
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });
  };

  useEffect(() => {
    getUsersCurrentLocation();
  }, []);

  useEffect(() => {
    if (location) {
      let isInArea = false;
      busStations.forEach(station => {
        const distance = haversineDistance(location, station.coordinate);
        if (distance <= RADIUS) {
          isInArea = true;
          Alert.alert('Alert', `You are within the area of ${station.name}!`);
          if (!inArea) {
            setInArea(true);
            if (timer) {
              clearTimeout(timer);
            }
            const newTimer = setTimeout(
              () => {
                Alert.alert('Alert', 'bạn đã ở khu vức này 8h');
              },
              8 * 60 * 60 * 1000,
            ); // 8 hours
            setTimer(newTimer);
          }
        }
      });
    }
  }, [location]);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location ? location.latitude : 21.0285, // Hà Nội
          longitude: location ? location.longitude : 105.8542,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onRegionChangeComplete={data => console.log(data)}>
        {location && <Marker coordinate={location} title={'Your Location'} />}

        {busStations.map(station => (
          <View key={station.id}>
            <Circle
              center={station.coordinate}
              radius={RADIUS}
              strokeColor="rgba(255, 0, 0, 0.5)" // Màu viền
              fillColor="rgba(255, 0, 0, 0.2)" // Màu điền
            />
            <Marker coordinate={station.coordinate} title={station.name} />
          </View>
        ))}
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
