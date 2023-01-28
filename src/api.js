import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};
export const fetchAPI = async (url) => {
  const options = {
    params: {
      maxResults: "50",
    },
    headers,
  };
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};

export const getChannel = async (id) => {
  const options = {
    // UCBVjMGOIkavEAhyqpxJ73Dw
    params: { part: "snippet,statistics", id: id },
    headers,
  };
  let {
    data: { items },
  } = await axios.get(`${baseUrl}/channels`, options);
  return items;
};

export const searchVideosApi = async (search) => {
  // console.log("searchVideosApi ~ search", search);
  const options = {
    params: {
      q: search,
      part: "snippet,id",
      regionCode: "US",
      maxResults: "50",
      order: "date",
    },
    headers,
  };

  const { data } = await axios.get(`${baseUrl}/search`, options);
  return data;
};

export const getChannelVideos = async (id) => {
  const options = {
    method: "GET",
    params: {
      channelId: id,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers,
  };
  const {
    data: { items },
  } = await axios.get(`${baseUrl}/search`, options);
  return items;
};

export const getVideoDetail = async (id) => {
  const options = {
    method: "GET",
    params: { part: "contentDetails,snippet,statistics", id },
    headers,
  };
  const {
    data: { items },
  } = await axios.get(`${baseUrl}/videos`, options);
  return items;
};
