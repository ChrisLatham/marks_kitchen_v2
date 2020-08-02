import React from "react";
import MenuNavItem from "./MenuNavItem/MenuNavItem";
import { sections } from "../../assets/menu.json";
import "./MenuNav.css";

const menuNav = ({ menuNavClick }) => {
  return (
    <div className="menu-nav">
      {sections.map(({ header }, index) => {
        return (
          <MenuNavItem
            key={index}
            heading={header}
            menuNavClick={menuNavClick}
          />
        );
      })}
    </div>
  );
};

export default menuNav;
