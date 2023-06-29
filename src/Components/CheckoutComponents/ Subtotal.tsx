import { FC } from "react";
import "./Subtotal.css";

// To ignore react-currency-format module error
// @ts-ignore
import CurrencyFormat from "react-currency-format";

const Subtotal: FC = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <div>
            <p>
              Checked 0 items: <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={670990.4566}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to payment</button>
    </div>
  );
};

export default Subtotal;
