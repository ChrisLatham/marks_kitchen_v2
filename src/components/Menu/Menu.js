import React from "react";
import { sections } from "../../assets/menu.json";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Menu.module.css";

const menu = ({ current }) => {
  const index = sections.findIndex((x) => x.header === current);
  return (
    <div>
      <h1 className={styles.menuHeading}>{sections[index].header}</h1>
      <h2 className={styles.menuTagline}>{sections[index].tagline}</h2>

      {sections[index].items.map(({ id, title, description, price }) => {
        return (
          <MenuItem
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default menu;
