// @flow
import Axios from 'axios';
import { GET_LASTFM_TOP_TRACKS } from './url';

export default {
  getTopTracks: () => {
    console.log('will call for top Tracks');
    return Axios.get(GET_LASTFM_TOP_TRACKS);
  },
};
