// @flow
import Axios from 'axios';
import { TOP_TRACKS, GET_SONG } from '../url';

export default {
  getTopTracks: () => {
    return Axios.get(TOP_TRACKS);
  },
  searchTrack: (artistName: string, name: string) => {
    return Axios.get(`${GET_SONG}?artist=${artistName}`);
  },
};
