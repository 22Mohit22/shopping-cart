import { FaStar } from "react-icons/fa";
import Counter from "./Counter";
import { useContext, useState } from "react";
import { GlobalContext } from "./context";

export default function Card({ wholeProduct, rating, imgScr, title, price }) {

    const {handleCartAdd,} = useContext(GlobalContext) ;
    const [quantity, setQuantity] = useState(1);

    return <div className="w-[310px] h-[540px] flex flex-col justify-between border-2 border-black items-center p-2">
        <div className="h-48 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={imgScr} alt={title} className="block h-full" />
        </div>
        <div className="flex flex-col gap-8 justify-between">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between p-2 pl-0 items-center w-[150px]">
                    <span className="flex items-center gap-1 text-lg text-blue-600">{rating} <FaStar />/ 5<FaStar /></span>
                    <p className="text-4xl font-semibold">$ {price}</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-[150px]">
                    <Counter quantity={quantity} setQuantity={setQuantity} />
                    <button onClick={() => (handleCartAdd(wholeProduct, quantity))} className="bg-black text-white text-2xl rounded-md p-2">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
}