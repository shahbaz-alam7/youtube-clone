import React from "react";
import Header from "../header/Header";
import { SideBar } from "../side-bar/side-bar";
import Main from "../main/Main";
import { Outlet } from "react-router-dom";

import "./layout.css";
import { useState } from "react";

const Layout = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Header active={active} setActive={setActive} />
      <div className="screen">
        <SideBar active={active} setActive={setActive} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
