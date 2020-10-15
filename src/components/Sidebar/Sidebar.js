import React, { useEffect } from "react";
import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
  useEffect(() => {
    console.log("Rendering [Sidebar]");
  }, [props.restaurants]);

  return (
    <div className={classes.Sidebar}>
      {props.restaurants.map((restaurant) => (
        <SidebarItem
          key={restaurant.name}
          name={restaurant.name}
          category={restaurant.category}
          selectRestaurant={() => {
            props.selectRestaurant(restaurant.name);
          }}
        />
      ))}
    </div>
  );
};

export default Sidebar;
