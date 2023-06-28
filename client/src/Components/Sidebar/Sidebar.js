import React from "react";
import { Data } from "../../Constants/Data";
import { Link } from "react-router-dom";

import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";

import instagramLogo from "../../Assets/Images/instagram-logo.png";
import instagramSmallLogo from "../../Assets/Images/small-ig-logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <img className="mobile" src={instagramSmallLogo} />
          <img className="pc" src={instagramLogo} />
        </div>
        <div className="sidebar-links">
          {Data.sidebarLinks.map((link) => {
            const { name, id, icon, path } = link;
            return (
              <li key={id}>
                <Link to={path}>
                  <i className="icon">{icon}</i>
                  <p>{name}</p>
                </Link>
              </li>
            );
          })}
        </div>
        <ul className="more-links">
          <li>
            <Link>
              <AiOutlineMenu className="icon" />
              <p>More</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-mobile">
        <div className="sidebar-top">
          <img src={instagramLogo} />
          <div className="sidebar-top-search">
            <input type="text" placeholder="Search"/>
            <AiOutlineHeart  className="icon"/>
          </div>
        </div>
        <div className="sidebar-bottom">
          {Data.sidebarMobileLinks.map((link) => {
            const { name, id, icon, path } = link;
            return (
              <li key={id}>
                <Link to={path}>
                  <i className="icon">{icon}</i>
                  {/* <p>{name}</p> */}
                </Link>
              </li>
            );
          })}
          <li>
            <Link>
              <img src="" />
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
