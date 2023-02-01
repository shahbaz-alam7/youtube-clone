import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TiTick } from "../../assets/icons";
import "../style/history.css";
const History = () => {
  const history = useSelector((state) => state.data.history);
  console.log(history);
  return (
    <div className="history-div">
      {history.length > 0 ? (
        history.map((item, i) => {
          return <HistoryCard item={item} />;
        })
      ) : (
        <h1>No history</h1>
      )}
    </div>
  );
};

export default History;
const HistoryCard = ({ item }) => {
  const navigate = useNavigate();
  const {
    id,
    channelId,
    channelTitle,
    publishedAt,
    lastViewedAt,
    thumbnails: { high, medium },
    title,
    description,
  } = item;
  const visitVideoPage = () => {
    navigate(`/video/${id}/${channelId}`);
  };
  return (
    <div className="hisory-card" onClick={visitVideoPage}>
      <img src={high.url} alt="" />
      <div className="details">
        <p className="title">{title}</p>
        <p className="channelTitle">
          <span>{channelTitle} </span>
          <TiTick className="icon" />
        </p>
        <p>{lastViewedAt}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
