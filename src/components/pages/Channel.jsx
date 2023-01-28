import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsBell } from "../../assets/icons";
import "./channel.css";
import {
  getChannelVideos,
  getChannelDetail,
} from "../../redux/actions/dataAction";
import { useParams } from "react-router-dom";
import { Card } from "../card/card";
const Channel = () => {
  const { id } = useParams();

  const data = useSelector((state) => state.data.channel);
  const videos = useSelector((state) => state.data.channelVideos);
  console.log("Channel ~ videos", videos);

  const dispatch = useDispatch();
  const { brandingSettings, statistics, snippet } = data;
  useEffect(() => {
    dispatch(getChannelDetail(id));
    dispatch(getChannelVideos(id));
  }, []);
  // console.log;
  if (!data) return "Loading...";
  return (
    <div className="channel">
      <div className="poster">
        <img
          src="https://t4.ftcdn.net/jpg/03/90/37/71/360_F_390377167_NYd4Zi29xUAxEFDcVwX8SYSbagv4At8N.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <div className="channel-info">
          <img src="" alt="" />
          <div className="info">
            <p className="title">{brandingSettings?.channel.title}</p>
            <p className="channel-id">{snippet?.customUrl}</p>
            <p className="subs">{statistics?.subscriberCount}</p>
          </div>
        </div>
        <button className="subscribe_btn">
          <BsBell /> <sapn>Subcribe</sapn>
        </button>
      </div>
      <div className="videos-container">
        <div className="cards">
          {videos.map((item, i) => {
            return <Card key={item.id.videoId} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Channel;
