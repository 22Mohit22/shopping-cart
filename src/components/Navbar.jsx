import { Link } from "react-router-dom";
import { GlobalContext } from "./context";
import { useContext, useEffect } from "react";
import Count from "./Count";

export default function Navbar() {

    const {totalQuantity, calculateTotalQuantity, cart} = useContext(GlobalContext);


    useEffect(() => {
        calculateTotalQuantity();
    }, [cart])
    
    return (
        <div className="min-w-full bg-green min-h-20 px-5 fixed bg-white z-10 flex flex-wrap justify-between items-center shadow-md text-3xl">
            <h1 className="font-bold">
                <Link to={'/'}>Khareedo.com</Link>
            </h1>
            <nav className="mx-6 mt-4">
                <ul className="flex justify-between">
                    <li className="mx-4 my-2 font-semibold border-b-4 border-transparent hover:border-b-4 duration-300 hover:border-black">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="mx-4 my-2 font-semibold border-b-4 border-transparent hover:border-b-4 duration-300 hover:border-black">
                        <Link to={'/shop'}>Shop</Link>
                    </li>
                    <li className="mx-4 my-2 font-semibold border-b-4 border-transparent hover:border-b-4 duration-300 relative hover:border-black">
                        <Link to={'/cart'}>Cart <Count totalCount={totalQuantity} className="text-base text-red-600 absolute" /> </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}