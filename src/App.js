import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import restaurants from "./data";
import MenuDisplay from "./components/MenuDisplay/MenuDisplay";

function App() {
  const [restaurantData, updateRestaurants] = useState(restaurants);
  const [currentRestaurant, updateCurrentRestaurant] = useState(restaurants[0]);

  const handleRestaurantSelection = (name) => {
    const currentIndex = restaurantData.findIndex((rest) => {
      return rest.name === name;
    });
    const restaurant = restaurantData[currentIndex];

    updateCurrentRestaurant(restaurant);
  };

  return (
    <div className="App">
      <Sidebar
        restaurants={restaurantData}
        selectRestaurant={handleRestaurantSelection}
      />
      <MenuDisplay
        name={currentRestaurant.name}
        category={currentRestaurant.category}
        items={currentRestaurant.items}
      />
    </div>
  );
}

export default App;
