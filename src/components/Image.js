/* eslint-disable jsx-a11y/alt-text */
import "./Image.css";
import Background from "../assets/Food-Image.png";

let Image = () => {
  return (
    <div className="Image">
      <img src={Background} />
      <div>
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Image;
