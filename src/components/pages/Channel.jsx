import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsBell } from "../../assets/icons";
import {
  getChannelDetail,
  getChannelVideos,
} from "../../redux/actions/dataAction";
import { SUBSCRIBE } from "../../redux/constant";
import { Card } from "../card/card";
import "./channel.css";
const Channel = () => {
  const { id } = useParams();
  console.log("Channel ~ id", id);

  const data = useSelector((state) => state.data.channel);
  const videos = useSelector((state) => state.data.channelVideos);
  const subscribe = useSelector((state) => state.data.subscribedChannel);

  const dispatch = useDispatch();
  const { brandingSettings, statistics, snippet } = data;
  useEffect(() => {
    dispatch(getChannelDetail(id));
    dispatch(getChannelVideos(id));
  }, []);
  const handleSubscribebtn = () => {
    dispatch({
      type: SUBSCRIBE,
      payload: id,
    });
  };
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
          <div className="channel-logo">
            <p>M</p>
          </div>
          <div className="info">
            <p className="title">{brandingSettings?.channel.title}</p>
            <p className="channel-id">{snippet?.customUrl}</p>
            <p className="subs">{statistics?.subscriberCount}</p>
          </div>
        </div>
        <button className="subscribe_btn" onClick={handleSubscribebtn}>
          <BsBell /> <span>Subscribe</span>
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
