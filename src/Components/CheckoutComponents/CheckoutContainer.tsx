import { FC } from "react";

import "./CheckoutContainer.css";

import Navbar from "../CommonComponents/NavbarComponents/Navbar";
import Subtotal from "./ Subtotal";
import CheckoutProducts from "./CheckoutProducts";
const CheckoutContainer: FC = () => {
  return (
    <>
      <Navbar />
      <div className="container checkout_container">
        <CheckoutProducts />
        <Subtotal />
      </div>
    </>
  );
};

export default CheckoutContainer;
