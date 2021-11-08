import "./FoodCard.css";

let FoodCard = (props) => {
  let fun1 = (abcc) => {
    console.log("abc", abcc.target.value);
  };
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
            <button onClick={fun1} value={props.keys}>
              +Add
            </button>
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
