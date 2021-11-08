import FoodCard from "./FoodCard";
import "./FoodList.css";

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
  const data = Foods.map((value, key) => (
    <FoodCard
      id={value.id}
      name={value.name}
      description={value.description}
      price={value.price}
      key={key}
      key1={key}
    />
  ));
  return <div className="FoodList">{data}</div>;
};

export default FoodList;
