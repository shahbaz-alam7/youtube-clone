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
  dispatch({ type: LOADING, payload: false });
  dispatch({ type: CHANNEL, payload: data[0] });
};
export const searchVideos = (query) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  let data = await API.searchVideosApi(query);
  dispatch({ type: LOADING, payload: false });
  dispatch({ type: VIDEOS, payload: data.items });
};

export const getChannelVideos = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const data = await API.getChannelVideos(id);
  dispatch({ type: LOADING, payload: false });
  dispatch({ type: CHANNEL_VIDEOS, payload: data });
};
export const videoDetail = (id) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  const data = await API.getVideoDetail(id);
  dispatch({ type: LOADING, payload: false });
  dispatch({ type: VIDEO_DETAIL, payload: data[0] });
};
