import React from "react";
import "./LeftSidebar.css";

import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";

import shorts from "./shorts.png";
import { NavLink } from "react-router-dom";

function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar }) {
  return (
    <div className="container_DrawaerLeftSidebar" style={toggleDrawerSidebar}>
      <div className="container2_DrawaerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={"/"} className="icon_sidebar_div">
            <div className="icon_container">
              <AiOutlineHome
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Home</div>
            </div>
          </NavLink>

          <div className="icon_sidebar_div">
            <div className="icon_container">
              <MdOutlineExplore
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Explore</div>
            </div>
          </div>

          <div className="icon_sidebar_div">
            <div className="icon_container">
              <img
                src={shorts}
                width={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
                alt="Shorts icon"
              />
              <div className="text_sidebar_icon">Shorts</div>
            </div>
          </div>

          <div className="icon_sidebar_div">
            <div className="icon_container">
              <MdSubscriptions
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Subscriptions</div>
            </div>
          </div>
        </div>

        <div className="libraryBtn_Drawerleftsidebar">
          <NavLink to={"/library"} className="icon_sidebar_div">
            <div className="icon_container">
              <MdOutlineVideoLibrary
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Library</div>
            </div>
          </NavLink>

          <NavLink to={"/history"} className="icon_sidebar_div">
            <div className="icon_container">
              <FaHistory
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">History</div>
            </div>
          </NavLink>

          <NavLink to={"/yourvideos"} className="icon_sidebar_div">
            <div className="icon_container">
              <AiFillPlaySquare
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Your Videos</div>
            </div>
          </NavLink>

          <NavLink to={"/watchlater"} className="icon_sidebar_div">
            <div className="icon_container">
              <MdOutlineWatchLater
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Watch Later</div>
            </div>
          </NavLink>

          <NavLink to={"/likedvideo"} className="icon_sidebar_div">
            <div className="icon_container">
              <AiFillLike
                size={22}
                className="icon_sidebar"
                style={{ margin: "auto 0.7rem" }}
              />
              <div className="text_sidebar_icon">Liked Videos</div>
            </div>
          </NavLink>
        </div>

        <div className="subScriptions_lsdbar">
          <h3>Your Subscriptions</h3>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
        </div>
      </div>

      <div
        className="container3_DrawaerLeftSidebar"
        onClick={() => toggleDrawer()}
      ></div>
    </div>
  );
}

export default DrawerSidebar;
