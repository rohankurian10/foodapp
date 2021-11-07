import { useDebugValue } from "react";
import FoodCard from "./FoodCard";

const Foods = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

let FoodList = () => {
  const data = Foods.map((value) => (
    <FoodCard
      id={value.id}
      name={value.name}
      description={value.description}
      price={value.price}
    />
  ));
  return <>{data}</>;
};

export default FoodList;
