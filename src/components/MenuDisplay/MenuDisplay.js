import React from "react";
import classes from "./MenuDisplay.module.css";
import MenuSection from "./MenuSection/MenuSection";

// Map items into object with category as key
// {Apps: [obj1, obj2], Pizza: [obj1]}
// [Apps, Pizza]
// [{Apps: [obj2, obj2]}, {Pizza: [obj1]}]

const MenuDisplay = ({ name, category, items }) => {
  const itemsByCategory = {};
  items.forEach((item) => {
    itemsByCategory[item.category] = itemsByCategory[item.category] || [];
    itemsByCategory[item.category].push(item);
  });

  const restructuredItems = Object.keys(itemsByCategory).map((category) => {
    return {
      category,
      items: itemsByCategory[category],
    };
  });

  return (
    <div className={classes.MenuDisplay}>
      <h1>{name}</h1>
      <p>{category}</p>
      {restructuredItems.map((item) => (
        <MenuSection
          key={item.category}
          title={item.category}
          items={item.items}
        />
      ))}
    </div>
  );
};

export default MenuDisplay;
