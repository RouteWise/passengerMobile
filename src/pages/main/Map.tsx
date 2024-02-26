import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker, enableLatestRenderer} from 'react-native-maps';
import {COLORS} from '../../constant';

const Map = () => {
  return (
    <View style={styles.container}>
      {/* <MapView
        showsCompass={false}
        region={{
          latitude: 41.0481703772817,
          longitude: 28.979688826775657,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}>
        <Marker
          title="Marker Title"
          description="Marker Description"
          coordinate={{
            latitude: 41.0481703772817,
            longitude: 28.979688826775657,
          }}>
          <View style={{backgroundColor: 'green', width: 20, height: 20}}>
            <Text>asdads</Text>
          </View>
        </Marker>
      </MapView> */}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
