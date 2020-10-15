import React from "react";
import classes from "./SidebarItem.module.css";

const SidebarItem = ({ name, category, selectRestaurant }) => (
  <div className={classes.SidebarItem} onClick={selectRestaurant}>
    <p>
      <strong>{name}</strong>
    </p>
    <p>{category}</p>
  </div>
);

export default SidebarItem;
