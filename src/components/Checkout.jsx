import { useContext, useEffect, useState } from "react";
import Count from "./Count";
import { GlobalContext } from "./context";

export default function Checkout({cart, totalPrice, totalQuantity}) {

    const {calculateTotalPrice, calculateTotalQuantity} = useContext(GlobalContext);

    const [checkoutPrice, setCheckoutPrice] = useState(0)

    function calcPrice(totalPrice) {
        const disAmount = totalPrice * discount;
        const finalPrice = totalPrice - disAmount;
        if (!finalPrice) {
            return 0;
        } else {
            return Math.round(finalPrice);
        }
    }


    useEffect(() => {
        setCheckoutPrice(
            calcPrice(totalPrice)
        )
        calculateTotalPrice();
        calculateTotalQuantity();
    }, [totalPrice, totalQuantity, cart])
    

    const discount = .10;
    return (
        <div className="text-2xl font-bold flex flex-col border-2 mt-2 border-black gap-4 shadow-md p-2 w-[700px]">
            <div className="flex flex-col gap-4 p-2">
                <h1>Total products: <Count totalCount={totalQuantity} /></h1>
                <h1>Total price: $ {totalPrice}</h1>
                <h1>Discount: 10% </h1>
                <h1>Cart totatl: $ {checkoutPrice}</h1>
            </div>
            <button className="w-full h-14 text-3xl bg-black text-white">Checkout now</button>
        </div>
    )
}