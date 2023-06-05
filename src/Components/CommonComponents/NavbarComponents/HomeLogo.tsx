import { FC } from "react";

const navSprite = "./nav-sprite.png";
const NavbarLogo: FC = () => {
  return (
    <a href="#" className="navbar_home-link">
      <img src={navSprite} alt="Amazon.com" className="navbar_logo" />
    </a>
  );
};

export default NavbarLogo;
