import { useContext, useEffect } from "react";
import { GlobalContext } from "../components/context";
import Smallcard from "../components/Smallcard";
import Checkout from "../components/Checkout";

const Cartpage = () => {

    const {cart, setCart, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity} = useContext(GlobalContext);
    
    useEffect(() => {
        console.log(cart);
    }, [cart])

    return (
        <div>
            <div className="flex flex-wrap justify-center items-start">
                <div>
                    {cart && cart.length ? cart.map(product => <Smallcard key={product.pId} id={product.pId} quantity={product.count} setCart={setCart} />) : <h1 className="text-3xl font-bold">Nothing in Cart</h1>}
                </div>
                {cart.length ? 
                <Checkout totalPrice={totalPrice} totalQuantity={totalQuantity} setTotalPrice={setTotalPrice} setTotalQuantity={setTotalQuantity} cart={cart} />
                : null
                }
            </div>
        </div>
    )
}

export default Cartpage;