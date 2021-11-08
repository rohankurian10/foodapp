import "./FoodCard.css";

let FoodCard = (props) => {
  console.log(props.key);
  return (
    <>
      <div className="FoodCard">
        <div className="LeftSide">
          <div className="Name">
            <b>{props.name}</b>
          </div>
          <div className="Description">
            <i>{props.description}</i>
          </div>
          <div className="Price">
            <b>${props.price}</b>
          </div>
        </div>
        <div className="RightSide">
          <input></input>
          <button></button>
        </div>
      </div>
      <div className="Hr">
        <hr></hr>
        <button></button>
      </div>
    </>
  );
};

export default FoodCard;
