import {
  ADD_TO_HISTORY,
  CHANNEL,
  CHANNEL_VIDEOS,
  LOADING,
  SUBSCRIBE,
  VIDEOS,
  VIDEO_DETAIL,
} from "../constant";
let initialState = {
  category: [],
  videos: [],
  channel: {},
  channelVideos: [],
  videoDetail: [],
  subscribedChannel: [],
  loading: false,
  history: [],
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
    case ADD_TO_HISTORY:
      console.log(action.payload);
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case SUBSCRIBE:
      const filterChannel = [...state.subscribedChannel];
      const check = filterChannel.includes(action.payload);
      if (!check) {
        return {
          ...state,
          subscribedChannel: [...state.subscribedChannel, action.payload],
        };
      }
    default:
      return { ...state };
  }
};

export default handleData;
