import React, { useEffect, useState } from "react";
import { Card } from "../card/card";
import { useDispatch, useSelector } from "react-redux";
import styles from "./main.module.css";
import { getVideos } from "../../redux/actions/dataAction";
const Main = () => {
  const dispatch = useDispatch();
  const myVideos = useSelector((state) => state.data.videos);

  useEffect(() => {
    dispatch(getVideos("search?part=snippet"));
  }, []);
  return (
    <div className={styles.root}>
      <div className={styles.cards}>
        {myVideos.map((item, i) => {
          return <Card key={item.id.videoId} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
