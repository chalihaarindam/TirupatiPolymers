import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider.js";
import {getBasketTotal} from "./reducer.js";
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket,user}, dispatch] = useStateValue();

   

    return (
         <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                    <p>
                             Subtotal({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />    this order 
                        contains a gift
                    </small>
                    </>
                )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rs"}
          />
        <button  disabled={!user} onClick={e => history.push('/payment')}>Proceed to checkout</button>
    
</div>
    )
}

export default Subtotal ;
