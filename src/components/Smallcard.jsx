import Counter from "./Counter";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context";

export default function Smallcard({ id, quantity, setCart }) {

    const {loading, setLoading, err, setErr, fixName } = useContext(GlobalContext);

    const [product, setProduct] = useState({});
    const [count, setCount] = useState(quantity);

    function updateCart(productId) {
        setCart(prevCart => {
            let cpCart = [...prevCart];
            const index = cpCart.findIndex(item => item.pId == productId)
            if (index !== -1) {
                cpCart[index] = {
                    ...cpCart[index], count: count
                };
            } else {
                return cpCart;
            }
            return cpCart;
        })
    }

    function handleRemove(itemId) {
        setCart(prevCart => {
            let cpCart = [...prevCart];
            const index = cpCart.findIndex(item => item.pId == itemId);
            if (index !== -1) {
                cpCart.splice(index, 1);
            } else {
                return cpCart;
            }
            return cpCart;
        })
    }

    useEffect(() => {
        updateCart(id);
    }, [count])

    async function getProduct(id) {
        setLoading(true);
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }catch(e) {
            setErr(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProduct(id)
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if(err) {
        return <h1>Some error occured</h1>
    }

    return(
        <div className="border-2 border-black flex flex-wrap gap-4 justify-between items m-2 max-w-[750px]">
            <div className="max-h-[58px] max-w-[68px] flex justify-center overflow-hidden m-2 items-center rounded-xl">
                <img src={product.image} alt={fixName(product.title)} className="block h-full" />
            </div>
            <div className="flex flex-col items-start justify-start mx-4 max-w-[340px]">
                <p className="flex justify-start items-center mx-4 gap-1 font-semibold text-md text-black">{fixName(product.title)}</p>
                <p className="gap-1 mx-4">$ {product.price}</p>
                <span className=" mx-4 font-semibold text-md">
                    Total price for {count} items: $ {parseFloat(count * product.price).toFixed(2)}
                </span>
            </div>
            <div className="flex flex-wrap scale-75 gap-8">
                <Counter quantity={count} setQuantity={setCount} />
                <button onClick={() => handleRemove(id)} className="text-2xl h-20  bg-red-600 text-white font-bold px-6 rounded-md hover:scale-105 duration-300">Remove</button>
            </div>
        </div>
    )
}

