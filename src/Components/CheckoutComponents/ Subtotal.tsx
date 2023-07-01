import { FC } from "react";

import { RootState } from "store";
import { useSelector } from "react-redux";

import "./Subtotal.css";

// To ignore react-currency-format module error
// @ts-ignore
import CurrencyFormat from "react-currency-format";

const Subtotal: FC = () => {
  const { checkoutProductsCount, checkoutProductsValue } = useSelector(
    (state: RootState) => state.checkoutProductsReducer
  );

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <div>
            <p>
              Checked {checkoutProductsCount} items: <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={checkoutProductsValue}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to payment</button>
    </div>
  );
};

export default Subtotal;
