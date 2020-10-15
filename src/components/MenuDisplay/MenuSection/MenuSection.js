import React from "react";
import classes from "./MenuSection.module.css";

const MenuSection = ({ title, items }) => (
  <div className={classes.MenuSection}>
    <h2>{title}</h2>
    {items.map((item) => (
      <div className={classes.Category}>
        <p>{item.name}</p>
        <p>${item.cost}</p>
      </div>
    ))}
  </div>
);

export default MenuSection;
