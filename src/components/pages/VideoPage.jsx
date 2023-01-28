import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { videoDetail, getChannelVideos } from "../../redux/actions/dataAction";
import { Card } from "../card/card";
import Spinner from "./Spinner";
import "./video.css";
const VideoPage = () => {
  const { id, channelId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.data.videoDetail);
  const channelVideos = useSelector((state) => state.data.channelVideos);
  const loading = useSelector((state) => state.data.loading);
  console.log("VideoPage ~ loading", loading)

  console.log("VideoPage ~ channelVideos", channelVideos);

  useEffect(() => {
    dispatch(videoDetail(id));
    dispatch(getChannelVideos(channelId));
  }, []);
  console.log("VideoPage ~ detail-=s", details);
  const { snippet, statistics } = details;
//   if (loading) return <Spinner />;
  return (
    <div className="video-page">
      <div className="vdo-part">
        <iframe
          className="you-tube"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=1`}
        ></iframe>
        <h1>Video</h1>
      </div>
      <div className="other-vdo">
        <h1>Other Video</h1>
        {channelVideos.map((item) => {
          return <Card key={item.id.videoId} item={item} />;
        })}
      </div>
    </div>
  );
};

export default VideoPage;
