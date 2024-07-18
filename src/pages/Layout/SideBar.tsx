import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
    <div className="sidebar-inner">
        <div className="menu-item-wrapper">
        <Link to="/">Menu 01</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 02</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 03</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 04</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 05</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 06</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 07</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 08</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 09</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 10</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 11</Link>
        </div>
        <div className="menu-item-wrapper">
        <Link to="/">Menu 12</Link>
        </div>
    </div>
    </>
  );
};

export default React.memo(SideBar);
