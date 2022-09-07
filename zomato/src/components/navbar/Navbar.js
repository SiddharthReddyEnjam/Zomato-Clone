import React from "react";
import Navshift from "./Navshift";
import "../../CSS/navbar.css";

import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { TbMinusVertical } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <div className="section-nav">
        <div className="nav-bar">
          <div className="search-bar-logo">
            <div className="div-logo">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato-logo"
                className="logo"
              />
            </div>
            <form className="form">
              <button className="btn-loc">
                <MdLocationOn className="location-icon" />
              </button>
              <input
                type="text"
                placeholder="Hyderabad"
                className="input input-address"
              />
              <button className="btn-search">
                <AiFillCaretDown className="down-icon" />
                <TbMinusVertical className="vertical" />
                <FiSearch className="search-icon" />
              </button>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="input input-search"
              />
            </form>
          </div>
          <div className="nav-profile">
            <div className="div-profile-img">
              <img
                src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="profile-img"
                className="profile-img"
              />
            </div>
            <p className="user">Siddharth</p>
            <button className="btn-down">
              <BiChevronDown className="down-arrow" />
            </button>
          </div>
        </div>
        <div className="map-data">
          <span>Home / </span>
          <span>India / </span>
          <span className="current"> Hyderabad Restaurants</span>
        </div>
      </div>
      <Navshift />
    </nav>
  );
};

export default Navbar;
