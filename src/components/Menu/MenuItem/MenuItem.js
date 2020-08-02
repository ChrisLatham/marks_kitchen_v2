import React from "react";
import "./MenuItem.css";

const menuItem = ({ id, title, description, price }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-id">{id}</div>
      <div className="menu-item-title">{title}</div>
      <div className="menu-item-description">{description}</div>
      <div className="menu-item-price">{price}</div>
    </div>
  );
};

export default menuItem;
