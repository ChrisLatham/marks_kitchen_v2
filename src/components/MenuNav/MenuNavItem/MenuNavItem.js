import React from "react";
import "./MenuNavItem.css";

const menuNavItem = ({ heading, menuNavClick }) => {
  return (
    <div onClick={() => menuNavClick(heading)} className="menu-nav-item">
      {heading}
    </div>
  );
};

export default menuNavItem;
