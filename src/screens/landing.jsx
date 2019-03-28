// @flow
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import songs from '../api/songs';

const Landing = () => {
  const loadTracks = () => {
    console.log('in effect hook');
    songs
      .getTopTracks()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <TouchableOpacity
        style={{ width: 50, height: 50, backgroundColor: 'pink' }}
        onPress={loadTracks}
      />
    </View>
  );
};

export default Landing;
