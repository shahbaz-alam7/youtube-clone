import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ADD_TO_HISTORY } from "../../redux/constant";
import styles from "./card.module.css";
export const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    channelId,
    channelTitle,
    description,
    publishedAt,
    title,
    thumbnails,
  } = item.snippet;
  const channelDetails = (id) => {
    navigate(`/channel/${id}`);
  };
  const addToHistory = () => {
    dispatch({
      type: ADD_TO_HISTORY,
      payload: {
        id: item.id.videoId,
        channelId,
        description,
        channelTitle,
        publishedAt,
        lastViewedAt: new Date().toLocaleTimeString(),
        title,
        thumbnails,
      },
    });
  };
  return (
    <div className={styles.root}>
      <Link to={`/video/${item.id.videoId}/${channelId}`}>
        <img
          src={thumbnails.high.url}
          className={styles.thmbnail}
          alt=""
          onClick={addToHistory}
        />
      </Link>
      <div className={styles.description}>
        <div>
          <img
            className={styles.acc}
            src="https://yt3.ggpht.com/ebjEj2lE6x58boSaDkUd0LTwgSQcMNKNjS8U2rVksVYNhlJ80oekI8dLPvOMxkULiU6ilBND37o=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div onClick={() => channelDetails(channelId)}>
          <p className={styles.title}>{title.slice(0, 30)}...</p>
          <div className={styles.name}>
            <p>{channelTitle}</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
