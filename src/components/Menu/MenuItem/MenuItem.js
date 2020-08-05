import React from "react";
import "./MenuItem.css";

const menuItem = ({ id, title, description, price }) => {
  let divDescription = null;
  if (description !== "") {
    divDescription = <div className="menu-item-description">{description}</div>;
  }

  const parsedPrice = parseFloat(price).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className="menu-item">
      <div className="menu-item-id">{id}</div>
      <div className="menu-item-title">{title}</div>
      {divDescription}
      <div className="menu-item-price">{parsedPrice}</div>
    </div>
  );
};

export default menuItem;
