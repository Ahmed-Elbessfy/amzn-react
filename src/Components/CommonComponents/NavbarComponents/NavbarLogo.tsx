import { FC } from "react";
import { Link } from "react-router-dom";

const navSprite = "./nav-sprite.png";
const NavbarLogo: FC = () => {
  return (
    <Link to="/" className="navbar_home-link">
      <img src={navSprite} alt="Amazon.com" className="navbar_logo" />
    </Link>
  );
};

export default NavbarLogo;
