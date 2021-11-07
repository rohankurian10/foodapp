import FoodList from "./FoodList";
import "./Menu.css";

let Menu = () => {
  return (
    <div className="Menu">
      <div className="List">
        <FoodList></FoodList>
      </div>
    </div>
  );
};

export default Menu;
