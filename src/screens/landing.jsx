// @flow
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import songs from '../api/songs';
import { SET_TRENDING_SONGS } from '../store/constants';

const renderTrack = ({ name, artist }) => (
  <TouchableOpacity
    style={{
      width: '100%',
      height: '15%',
      marginVertical: '1%',
      backgroundColor: 'pink',
    }}
    onPress={() => {}}>
    <Text>name</Text>
    <Text>artist.name</Text>
  </TouchableOpacity>
);
const Landing = props => {
  const { tracks } = props;
  // useEffect(() => {
  //   songs
  //     .getTopTracks()
  //     .then(({ data }) => props.setTracks(data.tracks.track))
  //     .catch(err => console.log(err));
  // });
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      {tracks.map(renderTrack)}
    </View>
  );
};

export default connect(
  state => ({
    tracks: state.trendingSongs,
  }),
  dispatch => ({
    setTracks: arr =>
      dispatch({
        type: SET_TRENDING_SONGS,
        payload: arr,
      }),
  })
)(Landing);
