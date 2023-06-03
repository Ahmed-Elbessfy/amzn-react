import { FC } from "react";
import Header from "./Header";
// import Products from "./Products";
import Products from "./Products";

const HomeContainer: FC = () => {
  return (
    <div className="container">
      <Header />
      <Products />
    </div>
  );
};

export default HomeContainer;
