import { FC } from "react";
import { RootState } from "store";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const navSprite = "./nav-sprite.png";
const NavbarOptions: FC = () => {
  const { checkoutProductsCount } = useSelector(
    (state: RootState) => state.checkoutProductsReducer
  );

  return (
    <div className="navbar_options">
      <div className="navbar_option">
        <select name="country" className="language">
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="du">DU</option>
          <option value="fr">FR</option>
        </select>
      </div>
      <div className="navbar_option">
        <p className="l1">Hello, sign in</p>
        <p className="l2">accounts &amp; lists</p>
      </div>
      <div className="navbar_option">
        <p className="l1">Returns</p>
        <p className="l2">&amp; orders</p>
      </div>
      <div className="navbar_option">
        <div className="navbar_cart">
          <Link to="/checkout" title="Checkout Products">
            <img src={navSprite} alt="Cart" className="navbar_cart_img" />
            <span className="navbar_cart-count">{checkoutProductsCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarOptions;
