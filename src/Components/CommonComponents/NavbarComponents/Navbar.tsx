import { FC } from "react";
import "./Navbar.css";

import NavbarLogo from "./NavbarLogo";
import NavbarSearch from "./NavbarSearch";
import NavbarOptions from "./NavbarOptions";

const Navbar: FC = () => {
  return (
    <nav>
      <NavbarLogo />
      <NavbarSearch />
      <NavbarOptions />
    </nav>
  );
};

export default Navbar;
