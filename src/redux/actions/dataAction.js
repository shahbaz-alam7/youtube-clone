import * as API from "../../api";
import {
  VIDEOS,
  CHANNEL_VIDEOS,
  CHANNEL,
  VIDEO_DETAIL,
  LOADING,
} from "../constant";
export const getVideos = (url) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  let data = await API.fetchAPI(url);
  dispatch({ type: VIDEOS, payload: data.items });
  dispatch({ type: LOADING, payload: false });
};

export const getChannelDetail = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  let data = await API.getChannel(id);
  dispatch({ type: CHANNEL, payload: data[0] });
  dispatch({ type: LOADING, payload: false });
};
export const searchVideos = (query) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  let data = await API.searchVideosApi(query);
  dispatch({ type: VIDEOS, payload: data.items });
  dispatch({ type: LOADING, payload: false });
};

export const getChannelVideos = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const data = await API.getChannelVideos(id);
  dispatch({ type: CHANNEL_VIDEOS, payload: data });
  dispatch({ type: LOADING, payload: false });
};
export const videoDetail = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const data = await API.getVideoDetail(id);
  dispatch({ type: VIDEO_DETAIL, payload: data[0] });
  dispatch({ type: LOADING, payload: false });
};

// export const subscribeChannel=(id)=(dispatch)=>{
// dispatch({})
// }