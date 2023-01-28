import styles from "./header.module.css";
import { youtube } from "../../assets/svgs/index";
import { searchVideos } from "../../redux/actions/dataAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  BiVideoPlus,
  AiOutlineSearch,
  AiOutlineMenu,
  BiMicrophone,
  BsBell,
} from "../../assets/icons";
import { useState, useEffect } from "react";
const Header = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  const handleClick = () => {
    dispatch(searchVideos(searchData));
  };
  return (
    <>
      <header className={styles["App-header"]}>
        {/* First section */}

        <div className={styles["menu-logo"]}>
          <AiOutlineMenu onClick={() => setActive(!active)} />
          <Link to="/">
            <img src={youtube} alt="logo" className={styles.logo} />
          </Link>
        </div>

        <div className={styles["search-container"]}>
          <div className={styles.search}>
            <input
              placeholder="Search..."
              className={styles["search-input"]}
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <AiOutlineSearch className={styles.icons} onClick={handleClick} />
          </div>
          <span className={styles["icon-bg"]}>
            <BiMicrophone className={styles.icons} />
          </span>
        </div>
        {/* Last Section */}
        <div className={styles.account}>
          <span className={styles["icon-bg"]}>
            <BsBell className={styles.icons} />
          </span>
          <span className={styles["icon-bg"]}>
            <BiVideoPlus className={styles.icons} />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
