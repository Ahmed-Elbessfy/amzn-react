import { FC } from "react";
import Navbar from "../CommonComponents/NavbarComponents/Navbar";

import Subtotal from "./ Subtotal";
const CheckoutContainer: FC = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        Checkout Component
        <Subtotal />
      </div>
    </>
  );
};

export default CheckoutContainer;
