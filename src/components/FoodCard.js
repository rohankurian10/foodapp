import "./FoodCard.css";

let FoodCard = (props) => {
  let count = 0;
  let addCounter = (val) => {
    let id = val.target.value;
    count = count + 1;
    document.getElementById(id).value = count;
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
            <input type="number" id={props.keys}></input>
          </div>
          <div className="Div2">
            <button onClick={addCounter} value={props.keys}>
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
