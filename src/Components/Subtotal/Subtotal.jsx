import React from "react";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
