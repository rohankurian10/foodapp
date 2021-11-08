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
          <div className="Div1">
            <p>Amount </p>
            <input type="number"></input>
          </div>
          <div className="Div2">
            <button>Add</button>
          </div>
        </div>
      </div>
      <div className="Hr">
        <hr></hr>
      </div>
    </>
  );
};

export default FoodCard;
