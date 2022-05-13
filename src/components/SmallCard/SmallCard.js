import React from "react";

export default function SmallCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div>
      CARD for RESTAURANT
      <h1>{restaurant.name}</h1>
      <h3>
        Address: {restaurant.address}, {restaurant.city}, {restaurant["postal code"]}
      </h3>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.name}</h1>
      <h1>{restaurant.name}</h1>
    </div>
  );
}
