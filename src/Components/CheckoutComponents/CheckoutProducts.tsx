import { FC } from "react";

import { RootState } from "store";
import { useSelector } from "react-redux";

import "./CheckoutProducts.css";

import CheckoutProduct from "./CheckoutProduct";
const CheckoutProducts: FC = () => {
  // get selected checkout products
  const selectedCheckoutProductsList = useSelector(
    (state: RootState) => state.checkoutProductsReducer.checkoutProductsList
  );

  return (
    <div className="checkout_products_container">
      <h1 className="checkout_title">Your shopping basket</h1>

      <div className="checkout_products">
        {selectedCheckoutProductsList.map((product) => {
          return (
            <CheckoutProduct
              key={product.checkId}
              checkId={product.checkId}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              imgSrc={product.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProducts;
