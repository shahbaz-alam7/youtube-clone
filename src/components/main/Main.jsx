import React, { useEffect, useState } from "react";
import { Card } from "../card/card";
import { useDispatch, useSelector } from "react-redux";
import styles from "./main.module.css";
import { getVideos } from "../../redux/actions/dataAction";
import Spinner from "../pages/Spinner";
const Main = () => {
  const dispatch = useDispatch();
  const myVideos = useSelector((state) => state.data.videos);
  const loading = useSelector((state) => state.data.loading);

  useEffect(() => {
    dispatch(getVideos("search?part=snippet"));
  }, []);
  if (loading) return <Spinner />;
  return (
    <div className={styles.root}>
      <div className={styles.cards}>
        {myVideos.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
