import { FC } from "react";

import { RootState } from "store";
import { useSelector } from "react-redux";

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
            <>
              <p key={product.id}> {product.title}</p> <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutProducts;
