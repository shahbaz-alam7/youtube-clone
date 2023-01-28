import {
  AiFillHome,
  AiOutlineLike,
  AiOutlineSetting,
  BiHistory,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  RiVideoLine,
  MdOutlineVideoLibrary,
  BsCodeSlash,
  BsMusicNoteBeamed,
  FaReact,
  DiJavascript1,
  IoGameControllerOutline,
} from "../../assets/icons";
import { getVideos } from "../../redux/actions/dataAction";
import { useDispatch, useSelector } from "react-redux";
import styles from "./side-bar.module.css";
import { useState, useEffect } from "react";
export const SideBar = ({ active, setActive }) => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navItems = [
    {
      name: "Home",
      icon: <AiFillHome />,
    },
    {
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
    {
      name: "Library",
      icon: <RiVideoLine />,
    },
    {
      name: "History",
      icon: <BiHistory />,
    },
    { line: true },
    { name: "Reactjs", icon: <FaReact />, cat: "reactjs" },
    { name: "Javascript", icon: <DiJavascript1 />, cat: "Javascript" },
    { name: "music", icon: <BsMusicNoteBeamed />, cat: "music" },
    { name: "web development", icon: <BsCodeSlash />, cat: "web development" },
    { name: "gaming", icon: <IoGameControllerOutline />, cat: "gaming" },
    { line: true },

    { name: "Your videos", icon: <MdOutlineVideoLibrary /> },
    {
      name: "Watch Later",
      icon: <MdOutlineWatchLater />,
    },
    {
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
    { line: true },
    { name: "Settings", icon: <AiOutlineSetting /> },
    {
      name: "Report history",
      icon: <MdOutlinedFlag />,
    },
    {
      name: "Help",
      icon: <MdOutlineHelpOutline />,
    },
    {
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  useEffect(() => {
    dispatch(getVideos(`search?part=snippet&q=${category}`));
  }, [category]);
  return (
    <div className={styles.root}>
      {active ? (
        <div className={styles.navbar}>
          <div className={styles.slideNav}>
            {navItems.map(({ name, icon, cat, line }) => {
              if (line) return <div className={styles.line} />;
              return (
                <button
                  className={styles.items}
                  onClick={() => {
                    setCategory(cat);
                    setActive(false);
                  }}
                >
                  {icon}
                  <span>{name}</span>
                </button>
              );
            })}

            <div className={styles.line} />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          {navItems.slice(0, 4).map(({ name, icon }, i) => {
            return (
              <button key={i} className={styles.items}>
                {icon}
                <span>{name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
