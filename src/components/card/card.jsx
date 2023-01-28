import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export const Card = ({ item }) => {
  const navigate = useNavigate();
  const {
    channelId,
    channelTitle,
    // description,
    publishedAt,
    title,
    thumbnails,
  } = item.snippet;
  const channelDetails = (id) => {
    navigate(`/channel/${id}`);
  };
  return (
    <div className={styles.root}>
      <Link to={`/video/${item.id.videoId}/${channelId}`}>
        <img src={thumbnails.high.url} className={styles.thmbnail} alt="" />
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
