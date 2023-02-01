import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getChannelVideos, videoDetail } from "../../redux/actions/dataAction";
import { ADD_TO_HISTORY, SUBSCRIBE } from "../../redux/constant";
import Spinner from "./Spinner";
import "./video.css";
const VideoPage = () => {
  const { id, channelId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.data.videoDetail);
  const channelVideos = useSelector((state) => state.data.channelVideos);
  const loading = useSelector((state) => state.data.loading);
  const handleSubscribebtn = () => {
    dispatch({ type: SUBSCRIBE, payload: channelId });
  };
  useEffect(() => {
    dispatch(videoDetail(id));
    dispatch(getChannelVideos(channelId));
  }, [id, channelId]);
  const { snippet, statistics } = details;

  if (loading) return <Spinner />;
  return (
    <div className="video-page">
      <div className="vdo-part">
        <iframe
          className="you-tube"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`}
        ></iframe>
        <h1>{snippet?.title}</h1>
        <div className="channel-details">
          <div className="channel-logo">
            <p>{snippet?.channelTitle.charAt(0)}</p>
          </div>
          <div className="name">
            <h1>{snippet?.channelTitle}</h1>
          </div>
          <div className="subscribe" onClick={handleSubscribebtn}>
            <p>Subscibe</p>
          </div>
        </div>
        <div className="vdo-details">
          <p>{snippet?.description}</p>
        </div>
        <div className="comment-section">
          <h1>Comment section Coming soon...</h1>
        </div>
      </div>
      <div className="other-vdos">
        <h1>Other Video</h1>
        {channelVideos.map((item, i) => {
          return <Video key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default VideoPage;

const Video = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vdoId = item.id.videoId;

  const channelId = item.snippet.channelId;
  const handleNavigate = () => {
    addToHistory();
    navigate(`/video/${vdoId}/${channelId}`);
  };
  const addToHistory = () => {
    dispatch({
      type: ADD_TO_HISTORY,
      payload: {
        id: vdoId,
        channelId,
        channelTitle: item?.snippet.channelTitle,
        publishedAt: item?.snippet.publishedAt,
        lastViewedAt: new Date().toLocaleTimeString(),
        title: item?.snippet.title,
        thumbnails: item?.snippet?.thumbnails,
      },
    });
  };
  return (
    <>
      <div className="video-box" onClick={handleNavigate}>
        <div className="thumbnail">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </div>
        <div className="detail-box">
          <p className="title">{item.snippet.title.slice(0, 50)}</p>
          <p className="name">{item.snippet.channelTitle}</p>
        </div>
      </div>
    </>
  );
};
