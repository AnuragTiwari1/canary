import { SET_TRENDING_SONGS } from '../constants';

const initialState = {
  trendingSongs: [
    {
      name: '7 rings',
      duration: '0',
      playcount: '3887541',
      listeners: '175286',
      mbid: '',
      url: 'https://www.last.fm/music/Ariana+Grande/_/7+rings',
      streamable: { '#text': '0', fulltrack: '0' },
      artist: {
        name: 'Ariana Grande',
        mbid: 'f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387',
        url: 'https://www.last.fm/music/Ariana+Grande',
      },
      image: [
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/34s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'small',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/64s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'medium',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/174s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'large',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/300x300/32b841c78d0982a13d616b756a197d5c.png',
          size: 'extralarge',
        },
      ],
    },
    {
      name: "Break Up with Your Girlfriend, I'm Bored",
      duration: '0',
      playcount: '1705377',
      listeners: '130527',
      mbid: '',
      url:
        'https://www.last.fm/music/Ariana+Grande/_/Break+Up+with+Your+Girlfriend,+I%27m+Bored',
      streamable: { '#text': '0', fulltrack: '0' },
      artist: {
        name: 'Ariana Grande',
        mbid: 'f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387',
        url: 'https://www.last.fm/music/Ariana+Grande',
      },
      image: [
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/34s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'small',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/64s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'medium',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/174s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'large',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/300x300/32b841c78d0982a13d616b756a197d5c.png',
          size: 'extralarge',
        },
      ],
    },
    {
      name: 'Thank U, Next',
      duration: '0',
      playcount: '4959869',
      listeners: '222526',
      mbid: '',
      url: 'https://www.last.fm/music/Ariana+Grande/_/Thank+U,+Next',
      streamable: { '#text': '0', fulltrack: '0' },
      artist: {
        name: 'Ariana Grande',
        mbid: 'f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387',
        url: 'https://www.last.fm/music/Ariana+Grande',
      },
      image: [
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/34s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'small',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/64s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'medium',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/174s/32b841c78d0982a13d616b756a197d5c.png',
          size: 'large',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/300x300/32b841c78d0982a13d616b756a197d5c.png',
          size: 'extralarge',
        },
      ],
    },
    {
      name: 'Sucker',
      duration: '0',
      playcount: '494654',
      listeners: '70875',
      mbid: '',
      url: 'https://www.last.fm/music/Jonas+Brothers/_/Sucker',
      streamable: { '#text': '0', fulltrack: '0' },
      artist: {
        name: 'Jonas Brothers',
        mbid: '6e019bc6-5c23-4935-94f0-4a896631d846',
        url: 'https://www.last.fm/music/Jonas+Brothers',
      },
      image: [
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/34s/13593f4bf3c17fc6875914e1bd991883.png',
          size: 'small',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/64s/13593f4bf3c17fc6875914e1bd991883.png',
          size: 'medium',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/174s/13593f4bf3c17fc6875914e1bd991883.png',
          size: 'large',
        },
        {
          '#text':
            'https://lastfm-img2.akamaized.net/i/u/300x300/13593f4bf3c17fc6875914e1bd991883.png',
          size: 'extralarge',
        },
      ],
    },
  ],
};
function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TRENDING_SONGS:
      return {
        ...state,
        trendingSongs: payload,
      };
    default:
      return state;
  }
}

export default dataReducer;
