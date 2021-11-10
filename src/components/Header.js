import "./Header.css";
import CartLogo from "./CartLogo";

let Header = () => {
  return (
    <div className="Header">
      <div className="Header-Inside">
        <h1>React Food</h1>
      </div>
      <CartLogo />
    </div>
  );
};

export default Header;
