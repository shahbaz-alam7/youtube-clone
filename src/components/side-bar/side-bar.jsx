import {
  AiFillHome,
  BiHistory,
  MdOutlineSubscriptions,
  BsCodeSlash,
  BsMusicNoteBeamed,
  FaReact,
  CgGirl,
  DiJavascript1,
  IoGameControllerOutline,
  BiTrophy,
  MdOutlineLiveTv,
  GiFilmStrip,
  MdPodcasts,
  GiPoloShirt,
  SiNextdotjs,
  AiOutlineSetting,
  AiOutlineBulb,
  AiOutlineFire,
} from "../../assets/icons";
import { getVideos } from "../../redux/actions/dataAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./side-bar.module.css";
import { useState, useEffect } from "react";
export const SideBar = ({ active, setActive }) => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navItems = [
    { name: "Home", icon: <AiFillHome />, link: "main" },
    {
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
      link: "subscription",
    },
    { name: "History", icon: <BiHistory />, link: "history" },
    { name: "Account", icon: <AiOutlineSetting />, link: "account" },
  ];
  const searchItems = [
    { name: "Trending", icon: <AiOutlineFire /> },
    { name: "New", icon: <AiFillHome /> },
    { name: "Coding", icon: <BsCodeSlash /> },
    { name: "Reactjs", icon: <FaReact /> },
    { name: "Javascript", icon: <DiJavascript1 /> },
    { name: "Next js", icon: <SiNextdotjs /> },
    { name: "Web development", icon: <BsCodeSlash /> },
    { name: "Music", icon: <BsMusicNoteBeamed /> },
    { name: "Movies", icon: <GiFilmStrip /> },
    { name: "Gaming", icon: <IoGameControllerOutline /> },
    { name: "Education", icon: <AiOutlineBulb /> },
    { name: "Podcast", icon: <MdPodcasts /> },
    { name: "Live", icon: <MdOutlineLiveTv /> },
    { name: "Sport", icon: <BiTrophy /> },
    { name: "Fashion", icon: <GiPoloShirt /> },
    { name: "Beauty", icon: <CgGirl /> },
  ];

  useEffect(() => {
    dispatch(getVideos(`search?part=snippet&q=${category}`));
  }, [category]);
  return (
    <div className={styles.root}>
      {active ? (
        <div className={styles.navbar}>
          <div className={styles.slideNav}>
            {searchItems.map(({ name, icon }) => {
              return (
                <button
                  key={name}
                  className={styles.items}
                  onClick={() => {
                    setCategory(name);
                    setActive(false);
                  }}
                >
                  {icon}
                  <span>{name}</span>
                </button>
              );
            })}

            {/* <div className={styles.line} /> */}
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          {navItems.map(({ name, icon, link }, i) => {
            return (
              <Link to={`/${link}`} key={i}>
                <button className={styles.items}>
                  {icon}
                  <span>{name}</span>
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
