import React from "react";
import styles from "./MenuItem.module.css";

const menuItem = ({ id, title, description, price }) => {
  let divDescription = null;
  if (description !== "") {
    divDescription = (
      <div className={styles.menuItemDescription}>{description}</div>
    );
  }

  const parsedPrice = parseFloat(price).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemId}>{id}</div>
      <div className={styles.menuItemTitle}>{title}</div>
      {divDescription}
      <div className={styles.menuItemPrice}>{parsedPrice}</div>
    </div>
  );
};

export default menuItem;
