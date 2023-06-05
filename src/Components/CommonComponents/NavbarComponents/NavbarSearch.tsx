import { FC } from "react";

import SearchIcon from "@mui/icons-material/Search";

const NavbarSearch: FC = () => {
  return (
    <div className="navbar_search">
      <input type="text" className="navbar_search-input" />
      <button className="navbar_searchBtn">
        <SearchIcon />
      </button>
    </div>
  );
};

export default NavbarSearch;
