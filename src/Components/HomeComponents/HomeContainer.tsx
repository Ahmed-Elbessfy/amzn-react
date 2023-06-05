import { FC } from "react";
import Navbar from "../CommonComponents/NavbarComponents/Navbar";
import Header from "./Header";
import Products from "./Products";

const HomeContainer: FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Products />
      </div>
    </>
  );
};

export default HomeContainer;
