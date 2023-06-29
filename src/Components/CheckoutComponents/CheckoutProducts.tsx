import { FC } from "react";

const CheckoutProducts: FC = () => {
  return (
    <div className="checkout_products_container">
      <h1 className="checkout_title">Your shopping basket</h1>

      <div className="checkout_products"></div>
    </div>
  );
};

export default CheckoutProducts;
