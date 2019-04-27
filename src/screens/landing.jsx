// @flow
import React, { useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import songs from '../api/songs/discovery';
import { SET_TRENDING_SONGS } from '../store/constants';

const renderTrack = ({ name, artist }) => (
  <TouchableOpacity
    key={name + artist.name}
    style={{
      width: '100%',
      height: 55,
      marginVertical: '1%',
      backgroundColor: 'pink',
    }}
    onPress={() => songs}>
    <Text style={{ fontSize: 20 }}>{name}</Text>
    <Text>{artist.name}</Text>
  </TouchableOpacity>
);
const Landing = props => {
  const { tracks } = props;
  useEffect(() => {
    console.log('will get top tracks');
    songs
      .getTopTracks()
      .then(({ data }) => props.setTracks(data.tracks.track))
      .catch(err => console.log(err));
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'green' }}>
      {tracks.map(renderTrack)}
    </ScrollView>
  );
};

export default connect(
  state => ({
    tracks: state.data.trendingSongs,
  }),
  dispatch => ({
    setTracks: arr =>
      dispatch({
        type: SET_TRENDING_SONGS,
        payload: arr,
      }),
  })
)(Landing);
