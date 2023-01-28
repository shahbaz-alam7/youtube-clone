import {
  VIDEOS,
  CHANNEL_VIDEOS,
  CHANNEL,
  VIDEO_DETAIL,
  LOADING,
} from "../constant";
let initialState = {
  category: [],
  videos: [],
  channel: {},
  channelVideos: [],
  videoDetail: [],
  loading: false,
};

const handleData = (state = initialState, action) => {
  switch (action.type) {
    case VIDEOS:
      return { ...state, videos: [...action.payload] };
    case CHANNEL_VIDEOS:
      return { ...state, channelVideos: [...action.payload] };
    case CHANNEL:
      return { ...state, channel: { ...action.payload } };
    case VIDEO_DETAIL:
      return { ...state, videoDetail: { ...action.payload } };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return { ...state };
  }
};

export default handleData;
